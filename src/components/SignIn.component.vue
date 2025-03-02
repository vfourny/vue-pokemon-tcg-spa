<template>

  <n-form @submit.prevent="handleLogin">
    <n-form-item label="Email">
      <n-input v-model:value="email" placeholder="Entrez votre email"/>
    </n-form-item>
    <n-form-item label="Mot de passe">
      <n-input
          v-model:value="password"
          placeholder="Entrez votre mot de passe"
          type="password"
          @keyup.enter="handleLogin"
      />
    </n-form-item>
    <n-space vertical>
      <n-button :loading="loading" block type="primary" @click="handleLogin">
        Se connecter
      </n-button>
      <div class="text-center mt-4">
        <n-button text @click="goToRegister">
          Pas de compte ? S'inscrire
        </n-button>
      </div>
    </n-space>
  </n-form>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {useUserStore} from "../stores/user.store.ts";
import {useMessage} from 'naive-ui'

const router = useRouter();
const userStore = useUserStore();

const email = ref('');
const password = ref('');
const loading = ref(false);
const message = useMessage()

const emit = defineEmits(['switch-to-register']);

const handleLogin = async () => {
  loading.value = true;
  try {
    await userStore.login({email: email.value, password: password.value});
    await router.push('/deck-builder');
  } catch (error) {
    message.error('Email ou mot de passe incorrect');
  } finally {
    loading.value = false;
  }
};

const goToRegister = () => {
  emit('switch-to-register');
};
</script>