import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {IPokemonCard} from '../types/pokemon.types';
import {getPokemonCards} from "../api/pokemonCard.api.ts";

export const usePokemonCardStore = defineStore('pokemonCardStore', () => {

    const pokemonCards = ref<IPokemonCard[]>([]);

    const fetchPokemonCards = async () => {
        pokemonCards.value = await getPokemonCards()
    }

    return {
        pokemonCards,
        fetchPokemonCards
    }
});
