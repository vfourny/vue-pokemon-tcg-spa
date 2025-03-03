<template>
  <div v-if="chosenCards">
    <h3>Deck ({{ chosenCards.length }} cartes)</h3>

    <!-- Nom du deck et bouton côte à côte -->
    <div class="deck-header">
      <n-input v-model:value="deckName" class="deck-name-input" placeholder="Nom du deck..."/>
      <n-button type="primary" @click="saveDeck">Sauvegarder</n-button>
    </div>

    <n-grid :cols="6" :x-gap="12" :y-gap="12">
      <n-gi v-for="pokemonCard in chosenCards" :key="pokemonCard.id">
        <PokemonCard :pokemonCard="pokemonCard"
                     @click="removeFromDeck(pokemonCard)"/>
      </n-gi>
    </n-grid>
  </div>

  <!-- Séparateur entre le deck et la collection -->
  <div class="deck-collection-separator"></div>

  <n-flex justify="center" style="width: 50%; margin: 30px auto;">
    <n-input v-model:value="searchQuery" clearable placeholder="Rechercher une carte..."/>
  </n-flex>

  <n-grid :cols="6" :x-gap="12" :y-gap="12">
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

const {pokemonCards} = storeToRefs(pokemonCardStore);

const searchQuery = ref('');

const deckName = ref('');
const chosenCards = ref<IPokemonCard[]>([]);

const filteredPokemonCards = computed(() => {
  return pokemonCards.value.filter(card =>
      card.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const addToDeck = (card: IPokemonCard) => {
  chosenCards.value?.push(card);
};
const removeFromDeck = (card: IPokemonCard) => {
  if (!chosenCards.value) return;
  chosenCards.value = chosenCards.value?.filter(currentCard => currentCard.id !== card.id);
};

const saveDeck = () => {
  if (!deckName.value || !deckName.value.trim()) {
    alert('Veuillez entrer un nom pour le deck avant de le sauvegarder.');
    return;
  }
  if (chosenCards.value.length === 0) {
    alert('Un deck doit contenir au moins 1 cartes.');
    return;
  }
  deckStore.createDeck(
      {
        name: deckName.value,
        cards: chosenCards.value.map(card => card.id)
      }
  );
};

onMounted(async () => {
  await pokemonCardStore.fetchPokemonCards();
});
</script>

<style scoped>
/* Style pour aligner le nom du deck et le bouton côte à côte */
.deck-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 16px;
}

/* Taille normale pour l'input du nom du deck */
.deck-name-input {
  width: 300px;
}

/* Séparateur entre le deck et la collection */
.deck-collection-separator {
  height: 1px;
  background-color: #e0e0e0;
  margin: 30px 0;
  width: 100%;
}
</style>