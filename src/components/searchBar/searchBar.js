//------------------------------------------
// COMPONENTE: SearchBar (Barra de Busqueda)
//------------------------------------------
import { loadIcon } from '../../utils/loadIcon.js';

/**
 * Crear la barra de búsqueda
 * @param {Function} onSearch - callback que se ejecuta al buscar
 * @returns {HTMLElement} elemento from con el buscador
 */

export function createSearchBar(onSearch){
    const form = document.createElement('form');
    form.className = 'search-bar';
    form.setAttribute('role', 'search');

     form.innerHTML = `
    <label for="search-input" class="search-bar__label visually-hidden">
      Buscar imágenes
    </label>
    <input
      id="search-input"
      type="text"
      name="search"
      class="search-bar__input"
      placeholder="Buscar"
      autocomplete="off"
    />
    <button type="submit" class="search-bar__button" aria-label="Buscar">
      ${loadIcon('search')}
    </button>
  `;

  const input  = form.querySelector('.search-bar__input');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();

    if (query === '') return;

    onSearch(query);
    input.value = ''; //Limpiar input tras la búsqueda
  });
  return form;
}