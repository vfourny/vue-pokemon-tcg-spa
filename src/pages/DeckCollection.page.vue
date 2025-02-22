<template>
  <div>
    <h2>Mes Decks</h2>

    <n-list bordered>
      <n-list-item v-for="deck in decks" :key="deck.id">
        <n-button text @click="openDeck(deck)">
          {{ deck.name }} ({{ deck.cards.length }} cartes)
        </n-button>
      </n-list-item>
    </n-list>

    <!-- Modale affichant le deck sélectionné -->
    <n-modal v-model:show="showModal" :title="selectedDeck?.name" preset="card" @close="closeModal">
      <template #header>
        <h3>{{ selectedDeck?.name }}</h3>
      </template>

      <div v-if="selectedDeck">
        <PokemonCard
            v-for="pokemonCard in selectedDeck.cards"
            :key="pokemonCard.id"
            :pokemonCard="pokemonCard"
        />
      </div>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useDeckStore} from '../stores/deck.store';
import {storeToRefs} from 'pinia';
import PokemonCard from '../components/PokemonCard.component.vue';
import type {IDeck} from "../types/deck.type.ts";

const deckStore = useDeckStore();
const {decks} = storeToRefs(deckStore);

const showModal = ref(false);
const selectedDeck = ref(null);

const openDeck = (deck: IDeck) => {
  selectedDeck.value = deck;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedDeck.value = null;
};
</script>