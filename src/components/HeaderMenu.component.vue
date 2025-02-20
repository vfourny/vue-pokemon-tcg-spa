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
    label: 'Collections',
    key: 'collections',
    onClick: () => {
      router.push({name: 'collections'});
    }
  },
  {
    label: 'DeckBuilder',
    key: 'deckBuilder',
    onClick: () => {
      router.push({name: 'deckBuilder'});
    }
  },
  {
    label: isLoggedIn.value ? 'Déconnexion' : 'Connexion',
    key: 'auth',
    onClick: () => handleAuthClick()
  }
]);

</script>
