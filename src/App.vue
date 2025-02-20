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
        <div style="width: 66.6667%; margin: 0 auto; height: 100vh;">
          <RouterView/>
        </div>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>
