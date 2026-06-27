// -----------------------------------------
// COMPONENTE: Gallery (galería de imágenes)
// -----------------------------------------

import { createImageCard } from "../ImageCard/imageCard.js";

/**
 * Crea la galería completa a partir de un array de imágenes
 * @param {Array} images - listado de imágenes desde la API
 * @returns {HTMLElement} elemento section con la galería
 */
export function createGallery(images) {
  const section = document.createElement("section");
  section.className = "gallery";
  section.setAttribute("aria-label", "Galería de imágenes");

  if (!images || images.length === 0) {
    section.innerHTML = `
      <p class="gallery__empty">No se encontraron imágenes.</p>
    `;
    return section;
  }

  images.forEach((photo) => {
    const card = createImageCard(photo);
    section.appendChild(card);
  });

  return section;
}
