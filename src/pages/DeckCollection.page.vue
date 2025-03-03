<template>
  <div class="deck-list-container">
    <h1>Liste des Decks</h1>

    <n-data-table
        :bordered="false"
        :columns="columns"
        :data="myDecks"
        striped
    />

    <n-modal v-model:show="showDetailsModal">
      <n-card
          :bordered="false"
          :title="'Détails du deck'"
          aria-modal="true"
          role="dialog"
          size="huge"
          style="width: 800px; max-width: 90vw"
      >
        <n-grid v-if="selectedDeck && selectedDeck.cards" :cols="3" :x-gap="12" :y-gap="12">
          <n-gi v-for="pokemonCard in selectedDeck.cards.filter(card => card && card.id)" :key="pokemonCard.id">
            <PokemonCard :pokemonCard="pokemonCard"/>
          </n-gi>
        </n-grid>
        <template #footer>
          <n-button @click="closeDetailsModal">Fermer</n-button>
        </template>
      </n-card>
    </n-modal>

    <!-- Modale de confirmation de suppression -->
    <n-modal v-model:show="showDeleteConfirmModal">
      <n-card
          :bordered="false"
          aria-modal="true"
          role="dialog"
          size="small"
          style="width: 400px"
          title="Confirmer la suppression"
      >
        <p>Êtes-vous sûr de vouloir supprimer ce deck?</p>
        <template #footer>
          <div style="display: flex; justify-content: flex-end; gap: 12px;">
            <n-button @click="showDeleteConfirmModal = false">Annuler</n-button>
            <n-button type="error" @click="confirmDeleteDeck">Supprimer</n-button>
          </div>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
import {computed, h, onMounted, ref} from 'vue';
import type {DataTableColumns} from 'naive-ui';
import {NButton, useMessage} from 'naive-ui'; // Importez explicitement le composant NButton
import {useDeckStore} from '../stores/deck.store';
import {storeToRefs} from 'pinia';
import {useUserStore} from "../stores/user.store.ts";
import type {IDeck} from "../types/deck.type.ts";
import PokemonCard from '../components/PokemonCard.component.vue';

// Stores
const deckStore = useDeckStore();
const userStore = useUserStore();
const message = useMessage();

const {currentUser} = storeToRefs(userStore);
const {decks} = storeToRefs(deckStore);

// État local pour les modales
const showDetailsModal = ref(false);
const showDeleteConfirmModal = ref(false);
const selectedDeck = ref<IDeck>({} as IDeck);

// Configuration des colonnes de la table avec les actions
const columns = ref<DataTableColumns>([
  {
    title: 'ID',
    key: 'id',
    width: 80
  },
  {
    title: 'Nom du deck',
    key: 'name',
    width: 200
  },
  {
    title: 'Actions',
    key: 'actions',
    width: 200,
    render: (row) => {
      return h(
          'div',
          {
            style: 'display: flex; gap: 8px;'
          },
          [
            h(
                NButton, // Utilisez directement le composant NButton importé
                {
                  type: 'info',
                  size: 'small',
                  onClick: () => showDeckDetails(row)
                },
                {default: () => 'Détails'}
            ),
            h(
                NButton, // Utilisez directement le composant NButton importé
                {
                  type: 'error',
                  size: 'small',
                  onClick: () => showDeleteDeck(row)
                },
                {default: () => 'Supprimer'}
            )
          ]
      );
    }
  }
]);

const myDecks = computed(() => {
  return decks.value.filter(deck => deck.owner.id === currentUser.value?.id);
});

// Chargement initial des données
onMounted(async () => {
  await Promise.all([
    deckStore.fetchDecks(),
    userStore.fetchCurrentUser()
  ]);
});

// Fonctions pour gérer les détails
function showDeckDetails(deck: IDeck) {
  selectedDeck.value = deck;
  showDetailsModal.value = true;
}

function closeDetailsModal() {
  showDetailsModal.value = false;
}

// Fonctions pour gérer la suppression
function showDeleteDeck(deck: IDeck) {
  selectedDeck.value = deck;
  showDeleteConfirmModal.value = true;
}

function confirmDeleteDeck() {
  // Mock de l'appel API pour supprimer le deck
  deckStore.removeDeck(selectedDeck?.value.id)
      .then(() => {
        message.success('Deck supprimé avec succès');
        deckStore.fetchDecks()
      })
      .catch((error) => {
        message.error(`Erreur lors de la suppression: ${error.message}`);
      })
      .finally(() => {
        showDeleteConfirmModal.value = false;
      });
}

</script>

<style scoped>
.deck-list-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

</style>