<template>
  <n-menu :options="menuOptions" mode="horizontal"/>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter();

const menuOptions = ref([
  {
    label: 'DeckBuilder',
    key: 'deck-builder',
    onClick: () => {
      router.push('/deck-builder');
    }
  },
  {
    label: 'Mes Decks',
    key: 'deck-collection',
    onClick: () => {
      router.push('/deck-collection');
    }
  },
  {
    label: 'Login',
    key: 'login',
    onClick: () => {
      router.push('/login');
    }
  },
]);
</script>