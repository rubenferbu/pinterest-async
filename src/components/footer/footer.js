// ---------------------------------------
// COMPONENTE: Footer (pie de página)
// ---------------------------------------

/**
 * Crea el footer de la aplicación
 * @returns {HTMLElement} elemento footer
 */
export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  const year = new Date().getFullYear();

  const inner = document.createElement('div');
  inner.className = 'Container footer__inner'

  const text = document.createElement('p');
  text.className = 'footer__text';
  text.textContent = `© ${year} Pinterest Clone — Imágenes proporcionadas por `;

  const link = document.createElement('a');
  link.href = 'https://unsplash.com'
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'footer__link';
  link.textContent = 'Unsplash';

  text.appendChild(link);
  inner.appendChild(text);
  footer.appendChild(inner);
  
  return footer;
}
