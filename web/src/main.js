import { createApp } from 'vue'

import { createPinia } from 'pinia'
const pinia = createPinia()
import { useStore } from './stores/store.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
library.add(fas, far, fal)

import {
    // create naive ui
    create,
    // component
    NButton, NTooltip, NIcon, NCard
} from 'naive-ui'

const naive = create({
    components: [
        NButton, NTooltip, NIcon, NCard
    ]
})

import './styles/index.css'

import mitt from "mitt";
const eventBus = mitt();

import App from './App.vue'
const app = createApp(App)

app.config.globalProperties.eventBus = eventBus;

import setup from './configs/configs.js';
setup(app);

app.use(naive);
app.use(pinia);
app.config.globalProperties.store = useStore();
app.mount('#app')