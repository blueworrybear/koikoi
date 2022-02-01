import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Peer from 'peerjs'

loadFonts()

const peer = new Peer()
const app = createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)

app.config.globalProperties.$conn = undefined;
app.config.globalProperties.$connectServer = (peerID) => {
    const conn = peer.connect(peerID)
    app.config.globalProperties.$conn = conn
    conn.on('open', () => {
        conn.send('hi!');
    });
}

peer.on('open', id => {
    store.commit('setPeerID', id)
})

peer.on('connection', conn => {
    app.config.globalProperties.$conn = conn
    conn.on('data', (data) => {
        console.log(data);
    });
})

app.mount('#app')
