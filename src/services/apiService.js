import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";

/**
 * Obtiene la lista de personajes con opciones de paginación y filtros.
 * @param {number} page Número de página (por defecto 1).
 * @param {string} name Nombre del personaje (opcional).
 * @returns {Promise} Datos de los personajes.
 */
export const getCharacters = async (page = 1, name = "") => {
  try {
    const response = await axios.get(`${API_URL}/character`, {
      params: { page, name },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    throw error;
  }
};

/**
 * Obtiene los detalles de un personaje por ID.
 * @param {number} id ID del personaje.
 * @returns {Promise} Datos del personaje.
 */
export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/character/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el personaje ${id}:`, error);
    throw error;
  }
};

/**
 * Obtiene la lista de ubicaciones con paginación.
 * @param {number} page Número de página (por defecto 1).
 * @returns {Promise} Datos de las ubicaciones.
 */
export const getLocations = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/location`, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener ubicaciones:", error);
    throw error;
  }
};

/**
 * Obtiene la lista de episodios con paginación.
 * @param {number} page Número de página (por defecto 1).
 * @returns {Promise} Datos de los episodios.
 */
export const getEpisodes = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/episode`, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener episodios:", error);
    throw error;
  }
};
