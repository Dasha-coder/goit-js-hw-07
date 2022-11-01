import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(gallery) {
  const markup = gallery
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
  return markup;
}
const openImgModal = (url) => {
  const instance = basicLightbox.create(`
    <img src="${url}">
`);

  instance.show(() => {
    galleryRef.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape" && instance.visible()) {
        instance.close();
      }
    });
  });
};

const onImgClick = (evt) => {
  evt.preventDefault();
  if (evt.target.className != "gallery__image") {
    return;
  }
  openImgModal(evt.target.dataset.source);
};

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

galleryRef.addEventListener("click", onImgClick);
