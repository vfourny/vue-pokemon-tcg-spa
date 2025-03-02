<template>
  <div v-if="currentBuildingDeck">
    <h3>Deck ({{ currentBuildingDeck.cards.length }} cartes)</h3>
    <n-input v-model:value="currentBuildingDeck.name" placeholder="Nom du deck..."/>
    <n-grid :cols="6" :x-gap="12" :y-gap="12">
      <n-gi v-for="pokemonCard in currentBuildingDeck.cards" :key="pokemonCard.id">
        <PokemonCard :pokemonCard="pokemonCard"
                     @click="removeFromDeck(pokemonCard)"/>
      </n-gi>
    </n-grid>
    <n-button type="primary" @click="saveDeck">Sauvegarder</n-button>
  </div>

  <n-input v-model:value="searchQuery" clearable placeholder="Rechercher une carte..."/>

  <div v-if="isLoading" class="loading-container">
    <n-spin/>
  </div>

  <n-grid v-else :cols="6" :x-gap="12" :y-gap="12">
    <n-gi v-for="pokemonCard in filteredPokemonCards" :key="pokemonCard.id">
      <PokemonCard :pokemonCard="pokemonCard" @click="addToDeck(pokemonCard)"/>
    </n-gi>
  </n-grid>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref} from 'vue';
import type {IPokemonCard} from '../types/pokemon.types.ts';
import {useDeckStore} from '../stores/deck.store';
import {usePokemonCardStore} from '../stores/pokemonCard.store';
import {storeToRefs} from 'pinia';
import PokemonCard from '../components/PokemonCard.component.vue';

const deckStore = useDeckStore();
const pokemonCardStore = usePokemonCardStore();

const {currentBuildingDeck} = storeToRefs(deckStore);
const {pokemonCards} = storeToRefs(pokemonCardStore);

const searchQuery = ref('');

const filteredPokemonCards = computed(() => {
  return pokemonCards.value.filter(card =>
      card.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const addToDeck = (card: IPokemonCard) => {
  currentBuildingDeck.value?.cards.push(card);
};
const removeFromDeck = (card: IPokemonCard) => {
  if (!currentBuildingDeck.value) return;
  currentBuildingDeck.value.cards = currentBuildingDeck.value?.cards.filter(c => c.id !== card.id);
};

const saveDeck = () => {
  if (!currentBuildingDeck.value || !currentBuildingDeck.value.name.trim()) {
    alert('Veuillez entrer un nom pour le deck avant de le sauvegarder.');
    return;
  }
  deckStore.saveDeck(currentBuildingDeck.value);
};

onMounted(async () => {
  await pokemonCardStore.fetchPokemonCards();
  currentBuildingDeck.value = {
    name: '',
    cards: []
  };
});
</script>
