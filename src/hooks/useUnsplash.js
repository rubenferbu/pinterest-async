//-------------------------------------------------------
// Hook: Gestión de Estado y lógica de Unsplash
//-------------------------------------------------------

import { getRandomImages, searchPhotos } from "../services/unsplashApi.js";

// Estado interno del "hook"
const state = {
  images: [],
  initialImages: [], // guarda la primera carga, para el botón de reset
  isLoading: false,
  error: null,
};

// Listeners que se ejecutan cada vez que el estado cambia
const listeners = [];

/**
 * Permite a otros archivos "suscribirse" a los cambios de estado
 * @param {Function} callback - función que se ejecuta al cambiar el estado
 */
export function subscribe(callback) {
  listeners.push(callback);
}

/**
 * Notifica a todos los suscriptores que el estado cambió
 */
function notify() {
  listeners.forEach((callback) => callback(state));
}

/**
 * Carga las imágenes iniciales al arrancar la app
 */
export async function loadInitialImages() {
  state.isLoading = true;
  state.error = null;
  notify();

  try {
    const data = await getRandomImages(20);
    state.images = data;
    state.initialImages = data; // guardamos copia para el reset
  } catch (error) {
    state.error = "No se pudieron cargar las imágenes iniciales.";
  } finally {
    state.isLoading = false;
    notify();
  }
}

/**
 * Busca imágenes según el término introducido
 * @param {string} query - texto de búsqueda
 */
export async function searchImages(query) {
  state.isLoading = true;
  state.error = null;
  notify();

  try {
    const data = await searchPhotos(query);

    if (data.length === 0) {
      state.error = "No se encontraron imágenes.";
      state.images = [];
    } else {
      state.images = data;
    }
  } catch (error) {
    state.error = "Error al buscar imágenes.";
  } finally {
    state.isLoading = false;
    notify();
  }
}

/**
 * Restaura la galería a su estado inicial (click en el logo)
 */
export function resetToInitial() {
  state.images = state.initialImages;
  state.error = null;
  notify();
}
