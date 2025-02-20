import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getPokemonCards = async () => {
    try {
        const response = await api.get(`/pokemon-cards`);
        return response.data
    } catch (error) {
        console.error(error);
    }

}