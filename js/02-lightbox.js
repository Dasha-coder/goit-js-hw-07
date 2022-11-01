import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(gallery) {
  const markup = gallery
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
  return markup;
}

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

let lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
  captionClass: "gallery__captionClass",
});

lightbox.refresh();
