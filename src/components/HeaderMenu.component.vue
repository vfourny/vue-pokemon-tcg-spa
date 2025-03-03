<template>
  <n-menu :options="menuOptions" mode="horizontal"/>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {useRouter} from 'vue-router'
import {useUserStore} from "../stores/user.store.ts";
import {storeToRefs} from "pinia";

const router = useRouter();
const userStore = useUserStore()

const {currentUser} = storeToRefs(userStore)

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
  currentUser.value
      ? {
        label: 'Déconnexion',
        key: 'logout',
        onClick: () => {
          userStore.logout();
          router.push('/login');
        }
      }
      : {
        label: 'Login',
        key: 'login',
        onClick: () => {
          router.push('/login');
        }
      }
]);
</script>
