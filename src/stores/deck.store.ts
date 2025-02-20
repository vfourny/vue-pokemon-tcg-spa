import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {IDeck} from "../types/deck.type.ts";

export const useDeckStore = defineStore('deckStore', () => {

    const currentBuildingDeck = ref<IDeck | null>(null);
    const decks = ref<IDeck[]>([]);


    return {
        decks,
        currentBuildingDeck
    }
});
