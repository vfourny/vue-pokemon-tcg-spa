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
      <n-layout-content class="content">
        <n-space justify="center">
          <n-message-provider>
            <RouterView/>
          </n-message-provider>
        </n-space>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.content {
  margin-top: 1em;
  margin-left: 3em;
  margin-right: 3em;
}
</style>