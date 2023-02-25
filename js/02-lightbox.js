import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const images = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", images);

function createGallery() {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<a
      class="gallery__item"
      href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>`;
		})
		.join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
	captionPosition: "bottom",
});

console.log(galleryItems);
