//--------------------------------------
//COMPONENTE: ImageCard (tarjeta de imagen)
//--------------------------------------

/**
 * Crear una tarjeta de Imagen con los datos de Unsplash
 * @param {Object} photo - Objeto imagen devuelto por la API de Unsplash
 * @returns {HTMLElement} elemento article con la tarjeta completa
 */
export function createImageCard(photo) {
  const { urls, alt_description, description, likes, links, user } = photo;

  const article = document.createElement("article");
  article.className = "image-card card";

  const imageAlt = alt_description || description || "Foto de $(user.name)";

  article.innerHTML = `
    <a 
      href="${links.html}" 
      target="_blank" 
      rel="noopener noreferrer"
      class="image-card__link"
      aria-label="Ver imagen de ${user.name} en Unsplash"
    >
      <img 
        src="${urls.regular}" 
        alt="${imageAlt}" 
        class="image-card__img"
        loading="lazy"
      />
      <div class="image-card__overlay">
        <span class="image-card__likes">❤ ${likes}</span>
        <span class="image-card__visit">Visitar</span>
      </div>
    </a>

    <div class="image-card__footer">
      <a 
        href="${user.links.html}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="image-card__author-link"
      >
        <img 
          src="${user.profile_image.medium}" 
          alt="Avatar de ${user.name}" 
          class="image-card__avatar"
        />
      </a>
      <span class="image-card__author-name">${user.name}</span>
    </div>
  `;
  return article;
}
