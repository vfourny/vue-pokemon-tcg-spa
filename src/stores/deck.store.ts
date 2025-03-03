import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {IDeck, IDeckPayload} from "../types/deck.type.ts";
import {deleteDeck, getDecks, postDeck} from "../api/deck.api.ts";

export const useDeckStore = defineStore('deckStore', () => {
    const decks = ref<IDeck[]>([]);

    const fetchDecks = async () => {
        decks.value = await getDecks()
    }

    const createDeck = async (deckPayload: IDeckPayload) => {
        await postDeck(deckPayload);
    }

    const removeDeck = async (deckId: number) => {
        await deleteDeck(deckId);
    }

    return {
        decks,
        fetchDecks,
        createDeck,
        removeDeck
    }
});
