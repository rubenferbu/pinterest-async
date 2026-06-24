//------------------------------------------
// MAIN: Punto de entrada de la aplicación
//------------------------------------------

import { createHeader } from './components/Header/Header.js';
import { createGallery } from './components/Gallery/Gallery.js';
import { createLoader } from './components/Loader/Loader.js';
import { createFooter } from './components/Footer/Footer.js';
import {
    subscribe,
    loadInitialImages,
    searchImages,
    resetToInitial,
} from './hooks/useUnsplash.js';

// Importación de archivos CSS de cada componente
import './styles/global.css';
import './components/Header/Header.css';
import './components/SearchBar/SearchBar.css';
import './components/Gallery/Gallery.css';
import './components/ImageCard/ImageCard.css';
import './components/Loader/Loader.css';
import './components/Footer/Footer.css';

const app = document.getElementById('app');

/**
 * Renderiza toda la aplicación según el estado actual
 * @param {Object} state - estado actual (images, isLoading, error)
 */

async function render(state){
    //Limpieza de contenedor
    app.innerHTML = '';
    
    // Hedder (Siempre visible)
    const hedader = createHeader({
        onSearch: (query) => searchImages(query),
        onReset: () => resetToInitial(),
    });
    app.appendChild(hedader);

    //Contenido Principal
    const main = document.createElement('main');
    main.className = 'container'

    if (state.isLoading){
        main.appendChild(createLoader());
    } else if (state.error){
        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.setAttribute('role', 'alert');
        errorMessage.textContent = state.error;
        main.appendChild(errorMessage);
    }else{
        main.appendChild(createGallery(state.images));
    }
    app.appendChild(main);

    //Footer (siempre Visible)
    app.appendChild(createFooter());
}

subscribe(render);

loadInitialImages();
