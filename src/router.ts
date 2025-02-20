import {createMemoryHistory, createRouter} from 'vue-router'
import DeckCollectionPage from './pages/DeckCollection.page.vue'
import LoginFormPage from './pages/LoginForm.page.vue'
import DeckBuilder from './pages/DeckBuilder.page.vue'


const routes = [
    {path: '/', component: DeckBuilder},
    {path: '/login', component: LoginFormPage},
    {path: '/deck-builder', component: DeckBuilder},
    {path: '/deck-collection', component: DeckCollectionPage},
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})