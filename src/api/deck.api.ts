import axios from 'axios';
import type {IDeck} from "../types/deck.type.ts";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getDecks = async () => {
    try {
        const response = await api.get(`/decks`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const postDeck = async (deckPayload: IDeck) => {
    try {
        const response = await api.post(`/decks`, deckPayload);
        return response.data
    } catch (error) {
        console.error(error);
    }
}