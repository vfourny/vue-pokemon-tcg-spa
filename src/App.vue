<script lang="ts" setup>
import {NConfigProvider} from 'naive-ui';
import HeaderMenu from './components/HeaderMenu.component.vue';
</script>

<template>
  <n-config-provider>
    <n-layout>
      <n-layout-header>
        <HeaderMenu/>
      </n-layout-header>
      <n-layout-content>
        <RouterView/>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>
