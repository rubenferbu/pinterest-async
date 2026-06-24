//--------------------------------------
//COMPONENTE: Loader (indicador de carga)
//--------------------------------------

/**
 * Crear el elemento del loader
 * @returns {HTMLElement} elemento div con el spinner
 */
export function createLoader() {
    const loader = document.createElement("div");
    loader.className = "loader";
    loader.setAttribute('role', 'status');
    loader.setAttribute('aria-live', 'polite');

    loader.innerHTML = `
        <div class = "loader-spinner"></div>
        <span class = "loader-text">Cargando imágenes...</span>
    `;
    return loader;
}