import axios from 'axios';
import type {IDeckPayload} from "../types/deck.type.ts";

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

export const postDeck = async (deckPayload: IDeckPayload) => {
    const token = localStorage.getItem('token');
    try {
        const response = await api.post(`/decks`, deckPayload,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const deleteDeck = async (deckId: number) => {
    const token = localStorage.getItem('token');
    try {
        const response = await api.delete(`/decks/${deckId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error(error);
    }
}