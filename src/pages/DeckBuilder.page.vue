<template>
  <n-input v-model:value="searchQuery" clearable placeholder="Rechercher une carte..."/>

  <div v-if="currentBuildingDeck" class="deck-preview">
    <h3>Deck ({{ currentBuildingDeck.cards.length }} cartes)</h3>

    <PokemonCard v-for="pokemonCard in currentBuildingDeck.cards" :key="pokemonCard.id" :pokemonCard="pokemonCard"
                 @click="removeFromDeck(pokemonCard)"/>


  </div>

  <div class="cards-container">
    <n-grid :cols="4" :x-gap="12" :y-gap="12">
      <n-gi v-for="pokemonCard in filteredPokemonCards" :key="pokemonCard.id">
        <PokemonCard :pokemonCard="pokemonCard" @click="addToDeck(pokemonCard)"/>
      </n-gi>
    </n-grid>
  </div>
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
  currentBuildingDeck.value.cards.push(card);
};
const removeFromDeck = (card: IPokemonCard) => {
  currentBuildingDeck.value.cards = currentBuildingDeck.value.cards.filter(c => c.id !== card.id);
};

onMounted(async () => {
  await pokemonCardStore.fetchPokemonCards();
  currentBuildingDeck.value = {
    name: 'Deck en construction',
    cards: []
  };
});
</script>

<style scoped>
.deck-builder {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.card-image {
  width: 100%;
  height: auto;
}

.deck-preview {
  margin-top: 20px;
}
</style>
