import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {IDeck, IDeckPayload} from "../types/deck.type.ts";
import {getDecks, postDeck} from "../api/deck.api.ts";

export const useDeckStore = defineStore('deckStore', () => {
    const decks = ref<IDeck[]>([]);

    const fetchDecks = async () => {
        return await getDecks()
    }

    const createDeck = async (deckPayload: IDeckPayload) => {
        await postDeck(deckPayload);
    }

    return {
        decks,
        fetchDecks,
        createDeck
    }
});
