<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <n-card class="w-96 shadow-lg">
      <n-tabs
          v-model:value="activeTab"
          :tabs-padding="20"
          animated
          type="line"
      >
        <n-tab-pane name="login" tab="Connexion">
          <SignInComponent @switch-to-register="switchTab('register')"/>
        </n-tab-pane>
        <n-tab-pane name="register" tab="Inscription">
          <RegisterComponent @switch-to-login="switchTab('login')"/>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup>
import RegisterComponent from '../components/Register.component.vue';
import SignInComponent from '../components/SignIn.component.vue';

import {ref} from 'vue';

const activeTab = ref('login');

const switchTab = (tab) => {
  activeTab.value = tab;
};
</script>