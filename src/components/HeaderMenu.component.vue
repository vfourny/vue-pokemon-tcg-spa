<template>
  <n-menu :options="menuOptions" mode="horizontal" @update:value="handleMenuSelect"/>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter();

const isLoggedIn = ref(false);
const menuOptions = ref([
  {
    label: 'DeckBuilder',
    key: 'deckBuilder',
    onClick: () => {
      router.push({name: 'deckBuilder'});
    }
  },
  {
    label: 'Mes Decks',
    key: 'deck-collections',
    onClick: () => {
      router.push({name: 'deck-collections'});
    }
  },
  {
    label: isLoggedIn.value ? 'Déconnexion' : 'Connexion',
    key: 'auth',
    onClick: () => handleAuthClick()
  }
]);

</script>
