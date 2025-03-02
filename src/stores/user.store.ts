import {defineStore} from 'pinia';
import {postLogin, postUser} from "../api/user.api.ts";
import type {IUser, UserPayload} from "../types/user.type.ts";
import {ref} from "vue";

export const useUserStore = defineStore('userStore', () => {
    const currentUser = ref<IUser | null>(null);

    const createUser = async (userPayload: UserPayload) => {
        await postUser(userPayload);
    }

    const login = async (userPayload: UserPayload) => {
        const data = await postLogin(userPayload);
        currentUser.value = data.user;
        localStorage.setItem('token', data.token);
    }

    return {
        currentUser,
        createUser,
        login
    }
});
