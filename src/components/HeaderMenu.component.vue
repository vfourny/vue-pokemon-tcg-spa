<template>
  <n-menu :options="menuOptions" mode="horizontal"/>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter();

const menuOptions = computed(() => [
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
  }
]);
</script>
