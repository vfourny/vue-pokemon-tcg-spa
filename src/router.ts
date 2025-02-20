import {createMemoryHistory, createRouter} from 'vue-router'
import CardCollection from './pages/CardCollection.page.vue'
import LoginFormPage from './pages/LoginForm.page.vue'
import DeckBuilder from './pages/DeckBuilder.page.vue'


const routes = [
    {path: '/', component: DeckBuilder},
    {path: '/login', component: LoginFormPage},
    {path: '/collection', component: CardCollection},
    {path: '/deck-builder', component: DeckBuilder},
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})