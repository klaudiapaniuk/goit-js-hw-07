import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const images = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", images);

function createGallery() {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
		})
		.join("");
}

const bigPicClick = (e) => {
	e.preventDefault();

	if (e.target.classList.contains(".gallery")) return;
	const source = e.target.dataset.source;

	const instance = basicLightbox.create(`<img src="${source}">`, {
		onShow: (instance) => window.addEventListener("keydown", escBtn),
		onClose: (instance) => window.removeEventListener("keydown", escBtn),
	});
	function escBtn(e) {
		if (e.key === "Escape") {
			instance.close();
		}
	}
	instance.show();
};

gallery.addEventListener("click", bigPicClick);

console.log(galleryItems);
