import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { PokemonCard } from '../types/pokemon.types';

export const usePokemonCardStore = defineStore('pokemonCardStore', () => {
  const pokemonCards = ref<PokemonCard[]>([
    {
      id: '1',
      name: 'Pikachu',
      types: ['Electric', 'Fire'],
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    },
    {
      id: '2',
      name: 'Charmander',
      types: ['Electric', 'Fire'],
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    },
    {
      id: '3',
      name: 'Squirtle',
      types: ['Electric', 'Fire'],
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    },
    {
      id: '4',
      name: 'Bulbasaur',
      types: ['Electric', 'Fire'],
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
  ]);

  return { pokemonCards };
});
