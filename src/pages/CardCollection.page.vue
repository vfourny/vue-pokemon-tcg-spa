<script lang="ts" setup>
import {onMounted} from "vue";
import {usePokemonCardStore} from "../stores/pokemonCard.store.ts";
import {storeToRefs} from "pinia";
import PokemonCard from "../components/PokemonCard.component.vue";

const pokemonCardStore = usePokemonCardStore();
const {pokemonCards} = storeToRefs(pokemonCardStore);

onMounted(() => {
  pokemonCardStore.fetchPokemonCards();
});
</script>

<template>
  <div class="pokemon-cards-container">
    <PokemonCard v-for="pokemonCard in pokemonCards" :key="pokemonCard.id" :pokemonCard="pokemonCard"/>
  </div>
</template>

<style scoped>
.pokemon-cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colonnes */
  gap: 16px; /* Espacement entre les cartes */
  justify-items: center; /* Centrer les cartes horizontalement */
}

p {
  margin: 0;
}

n-card {
  max-width: 200px; /* Limite la largeur des cartes */
  height: auto; /* Ajuste la hauteur automatiquement */
}
</style>