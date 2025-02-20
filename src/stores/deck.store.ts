import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {IDeck} from "../types/deck.type.ts";
import {getDecks} from "../api/deck.api.ts";

export const useDeckStore = defineStore('deckStore', () => {

    const currentBuildingDeck = ref<IDeck | null>(null);
    const decks = ref<IDeck[]>([]);

    const fetchMyDecks = async () => {
        const allDecks = await getDecks()
        return allDecks
    }

    const createDeck = async (deckPayload: IDeck) => {
        await createDeck(deckPayload);
    }

    return {
        decks,
        currentBuildingDeck,
        fetchMyDecks,
        createDeck
    }
});
