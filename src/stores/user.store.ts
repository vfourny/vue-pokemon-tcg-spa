import {defineStore} from 'pinia';
import {getUserById, postLogin, postUser} from "../api/user.api.ts";
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
        localStorage.setItem('userId', data.user.id);
    }

    const fetchCurrentUser = async () => {
        const data = await getUserById(Number(localStorage.getItem('userId')));
        currentUser.value = {id: data.id, email: data.email};
    }

    return {
        currentUser,
        createUser,
        login,
        fetchCurrentUser
    }
});
