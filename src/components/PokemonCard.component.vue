<template>
  <n-card :title="pokemonCard.name" size="small">
    <template #header>
      #header
    </template>
    <template #header-extra>
      PV {{ pokemonCard.lifePoints }}
      <n-tag :bordered="true" :color="{color:getPokemonTypeColor(pokemonCard.type.name), textColor:'black'}" round>
        {{ pokemonCard.type.name }}
      </n-tag>
    </template>
    <template #cover>
      <img :src="pokemonCard.imageUrl">
    </template>
    <template #default>
      <p>ttest</p>
    </template>
  </n-card>
</template>

<script lang="ts" setup>
import type {IPokemonCard} from "../types/pokemon.types.ts";

const props = defineProps<{
  pokemonCard: IPokemonCard
}>();

const {pokemonCard} = props

const getPokemonTypeColor = (type: string) => {
  switch (type.toUpperCase()) {
    case 'FIRE':
      return '#FF9C54';
    case 'WATER':
      return '#4A90E2';
    case 'GRASS':
      return '#8BC34A';
    case 'ELECTRIC':
      return '#FFD54F';
    case 'PSYCHIC':
      return '#FF80AB';
    case 'FIGHTING':
      return '#FF5252';
    case 'DARK':
      return '#424242';
    case 'STEEL':
      return '#B0BEC5';
    case 'FAIRY':
      return '#FF4081';
    case 'DRAGON':
      return '#7E57C2';
    case 'GHOST':
      return '#7986CB';
    case 'ICE':
      return '#4DD0E1';
    case 'BUG':
      return '#CDDC39';
    case 'POISON':
      return '#9C27B0';
    case 'ROCK':
      return '#A1887F';
    case 'GROUND':
      return '#795548';
    case 'FLYING':
      return '#90A4AE';
    default:
      return '#9E9E9E';
  }
};
</script>

