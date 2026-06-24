// -------------------------------------------------------
// SERVICIO: Conexión con la API de Unsplash
// -------------------------------------------------------

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const BASE_URL = "https://api.unsplash.com";

/**
 * Obtine imagenes aleatorias (carga inicial)
 * @param {number} count - Cantidad de imagenes a obtener
 * @returns {Promise<Array>} - Promesa con el array de imagenes
 */
export async function getRandomImages(count = 20) {
  const url = `${BASE_URL}/photos/random?count=${count}&client_id=${ACCESS_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error al obtener imágenes`);
  }
  return await response.json();
}

/**
 * Busca imágenes según un término de búsqueda
 * @param {string} query - texto introducido por el usuario
 * @param {number} perPage - resultados por página
 * @returns {Promise<Object>} objeto con resultados y total
 */
export async function searchPhotos(query, perPage = 20) {
  const url = `${BASE_URL}/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}&client_id=${ACCESS_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error al buscar imágenes");
  }

  const data = await response.json();
  return data.results;
}
