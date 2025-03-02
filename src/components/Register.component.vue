<template>
  <div>
    <n-form @submit.prevent="handleRegister">
      <n-form-item label="Email">
        <n-input v-model:value="email" placeholder="Entrez votre email"/>
      </n-form-item>
      <n-form-item label="Mot de passe">
        <n-input
            v-model:value="password"
            placeholder="Entrez votre mot de passe"
            type="password"
        />
      </n-form-item>
      <n-form-item
          :feedback="passwordError"
          :validation-status="passwordError ? 'error' : undefined"
          label="Confirmer le mot de passe"
      >
        <n-input
            v-model:value="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            type="password"
            @keyup.enter="handleRegister"
        />
      </n-form-item>
      <n-space vertical>
        <n-button :loading="loading" block type="primary" @click="handleRegister">
          S'inscrire
        </n-button>
        <div class="text-center mt-4">
          <n-button text @click="goToLogin">
            Déjà inscrit ? Se connecter
          </n-button>
        </div>
      </n-space>
    </n-form>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useUserStore} from "../stores/user.store.ts";
import {useMessage} from 'naive-ui';

const userStore = useUserStore();
const message = useMessage();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);

const emit = defineEmits(['switch-to-login']);

const passwordMatch = computed(() => {
  if (!confirmPassword.value) return true;
  return password.value === confirmPassword.value;
});

const passwordError = computed(() => {
  if (!confirmPassword.value) return '';
  return passwordMatch.value ? '' : 'Les mots de passe ne correspondent pas';
});

const handleRegister = async () => {
  if (!passwordMatch.value) {
    message.error('Les mots de passe ne correspondent pas');
    return;
  }

  loading.value = true;
  try {
    await userStore.createUser({email: email.value, password: password.value});
    message.success('Inscription réussie !');
    emit('switch-to-login');
  } catch (error) {
    message.error("Erreur lors de l'inscription");
  } finally {
    loading.value = false;
  }
};

const goToLogin = () => {
  emit('switch-to-login');
};
</script>