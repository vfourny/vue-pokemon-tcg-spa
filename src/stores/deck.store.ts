import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {IDeck} from "../types/deck.type.ts";
import {getDecks, postDeck} from "../api/deck.api.ts";

export const useDeckStore = defineStore('deckStore', () => {

    const currentBuildingDeck = ref<IDeck | null>(null);
    const decks = ref<IDeck[]>([]);

    const fetchMyDecks = async () => {
        return await getDecks()
    }

    const createDeck = async (deckPayload: IDeck) => {
        await postDeck(deckPayload);
    }

    return {
        decks,
        currentBuildingDeck,
        fetchMyDecks,
        createDeck
    }
});
