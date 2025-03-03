import {createRouter, createWebHistory} from 'vue-router'
import DeckCollectionPage from './pages/DeckCollection.page.vue'
import DeckBuilder from './pages/DeckBuilder.page.vue'
import LoginFormPage from './pages/LoginForm.page.vue'


const routes = [
    {path: '/', component: LoginFormPage},
    {path: '/deck-builder', component: DeckBuilder},
    {path: '/deck-collection', component: DeckCollectionPage},
    {path: '/login', component: LoginFormPage},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})