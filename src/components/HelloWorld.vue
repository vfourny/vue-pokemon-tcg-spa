<template>
  <n-grid :x-gap="12" :y-gap="8" :cols="4">
    <n-grid-item v-for="pokemonCard in pokemonCards" :key="pokemonCard.id">
      <n-card title="Card with Cover">
        <template #header-extra>
          <n-tag
            v-for="type in pokemonCard.types"
            :key="type"
            :color="{ color: getColorByType(type.toLowerCase()) }"
            >{{ type }}</n-tag
          >
        </template>
        <template #cover>
          <img :src="pokemonCard.imageUrl" />
        </template>
        Card Content
      </n-card>
    </n-grid-item></n-grid
  >
</template>

<script setup lang="ts">
import { NCard, NGrid, NGridItem, NTag } from 'naive-ui';
import { usePokemonCardStore } from '../stores/pokemonCard.store';
import { storeToRefs } from 'pinia';

const pokemonCardStore = usePokemonCardStore();
const { pokemonCards } = storeToRefs(pokemonCardStore);

const getColorByType = (type: string) => {
  switch (type) {
    case 'fire':
      return 'red';
    case 'water':
      return 'blue';
    case 'grass':
      return 'green';
    case 'electric':
      return 'yellow';
    case 'psychic':
      return 'purple';
    case 'ice':
      return 'cyan';
    case 'dragon':
      return 'orange';
    case 'dark':
      return 'black';
    case 'fairy':
      return 'pink';
    case 'normal':
      return 'gray';
    default:
      return 'default';
  }
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
