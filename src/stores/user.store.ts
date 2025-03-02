import {defineStore} from 'pinia';
import {postLogin, postUser} from "../api/user.api.ts";
import type {UserPayload} from "../types/user.type.ts";

export const useUserStore = defineStore('userStore', () => {

    const createUser = async (userPayload: UserPayload) => {
        await postUser();
    }

    const login = async (userPayload: UserPayload) => {
        await postLogin(userPayload);
    }

    return {
        createUser,
        login
    }
});
