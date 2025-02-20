<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {useUserStore} from "../stores/user.store.ts";

const router = useRouter();
const userStore = useUserStore();

const email = ref('');
const password = ref('');
const loading = ref(false);

const handleLogin = async () => {
  loading.value = true;
  try {
    await userStore.login(email.value, password.value);
    await router.push('/collection');
  } catch (error) {
    console.error('Identifiants incorrects');
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <n-card class="shadow-lg" title="Connexion">
      <n-form @submit.prevent="handleLogin">
        <n-form-item label="Email">
          <n-input v-model="email" placeholder="Entrez votre email"/>
        </n-form-item>
        <n-form-item label="Mot de passe">
          <n-input v-model="password" placeholder="Entrez votre mot de passe" type="password"/>
        </n-form-item>
        <n-space vertical>
          <n-button :loading="loading" block type="primary" @click="handleLogin">
            Se connecter
          </n-button>
        </n-space>
      </n-form>
    </n-card>
  </div>
</template>
