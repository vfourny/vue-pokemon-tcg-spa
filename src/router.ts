import {createRouter, createWebHistory} from 'vue-router'
import DeckCollectionPage from './pages/DeckCollection.page.vue'
import DeckBuilder from './pages/DeckBuilder.page.vue'


const routes = [
    {path: '/', component: DeckBuilder},
    {path: '/deck-builder', component: DeckBuilder},
    {path: '/deck-collection', component: DeckCollectionPage},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})