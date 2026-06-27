// ---------------------------------------
// COMPONENTE: Footer (pie de página)
// ---------------------------------------

import { loadIcon } from '../../utils/loadIcon.js';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const year = new Date().getFullYear();

  const inner = document.createElement('div');
  inner.className = 'container footer__inner';

  // Texto con enlace a Unsplash
  const text = document.createElement('p');
  text.className = 'footer__text';
  text.textContent = `© ${year} Pinterest Clone — Imágenes proporcionadas por `;

  const unsplashLink = document.createElement('a');
  unsplashLink.href = 'https://unsplash.com';
  unsplashLink.target = '_blank';
  unsplashLink.rel = 'noopener noreferrer';
  unsplashLink.className = 'footer__link';
  unsplashLink.textContent = 'Unsplash';

  text.appendChild(unsplashLink);

  // Enlace a GitHub con icono
  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/rubenferbu/pinterest-async';
  githubLink.target = '_blank';
  githubLink.rel = 'noopener noreferrer';
  githubLink.className = 'footer__github';
  githubLink.setAttribute('aria-label', 'Ver código en GitHub');
  githubLink.innerHTML = loadIcon('github');

  inner.appendChild(text);
  inner.appendChild(githubLink);
  footer.appendChild(inner);

  return footer;
}
