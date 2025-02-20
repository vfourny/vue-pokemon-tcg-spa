import axios from 'axios';
import type {UserPayload} from "../types/user.type.ts";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const postUser = async () => {
    try {
        const response = await api.post(`/users`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const postLogin = async (userPayload: UserPayload) => {
    try {
        const response = await api.post(`/users/login`, userPayload);
        return response.data
    } catch (error) {
        console.error(error);
    }
}