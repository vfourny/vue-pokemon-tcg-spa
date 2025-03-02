<template>
  <n-card class="pokemon-card" size="small">
    <template #header>
      <div class="card-header">
        <span class="pokemon-name">{{ pokemonCard.name }}</span>
        <span class="pokemon-hp">PV {{ pokemonCard.lifePoints }}</span>
      </div>
    </template>

    <template #header-extra>
      <div class="type-container">
        <n-tag :bordered="true" :color="{color: getPokemonTypeColor(pokemonCard.type.name), textColor: 'black'}" round>
          {{ pokemonCard.type.name }}
        </n-tag>
      </div>
    </template>

    <template #cover>
      <img :src="pokemonCard.imageUrl" alt="pokemon-image" class="pokemon-image">
    </template>

    <template #default>
      <div class="pokemon-info">
        <p class="pokemon-size">Taille: {{ pokemonCard.height }}m | Poids: {{ pokemonCard.weight }}kg</p>
      </div>

      <div class="pokemon-attacks">
        <div class="attack">
          <span class="attack-name">{{ pokemonCard.attack.name }}</span>
          <span class="attack-damage">{{ pokemonCard.attack.damages }} PV</span>
        </div>
      </div>
    </template>
  </n-card>
</template>

<script lang="ts" setup>
import type {IPokemonCard} from "../types/pokemon.types.ts";

const props = defineProps<{ pokemonCard: IPokemonCard }>();
const {pokemonCard} = props;

const getPokemonTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    FIRE: '#FF9C54', WATER: '#4A90E2', GRASS: '#8BC34A', ELECTRIC: '#FFD54F',
    PSYCHIC: '#FF80AB', FIGHTING: '#FF5252', DARK: '#424242', STEEL: '#B0BEC5',
    FAIRY: '#FF4081', DRAGON: '#7E57C2', GHOST: '#7986CB', ICE: '#4DD0E1',
    BUG: '#CDDC39', POISON: '#9C27B0', ROCK: '#A1887F', GROUND: '#795548',
    FLYING: '#90A4AE'
  };
  return colors[type.toUpperCase()] || '#9E9E9E';
};
</script>

<style scoped>
.pokemon-card {
  width: auto;
  height: auto;
  border-radius: 10px;
  background: #f8f8f8;
  padding: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}

.pokemon-hp {
  color: red;
  font-size: 12px;
  margin-right: 10px;
}

.type-container {
  margin-top: 5px;
}

.pokemon-image {
  display: block;
  width: 100%;
  border-radius: 5px;
}

.pokemon-info {
  text-align: center;
  font-size: 12px;
  color: #555;
}

.pokemon-attacks {
  margin-top: 5px;
  padding: 5px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}

.attack {
  display: flex;
  justify-content: space-between;
  padding: 3px 0;
}

.attack-name {
  font-weight: bold;
}

.attack-damage {
  color: red;
}
</style>
