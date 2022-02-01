import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Peer from 'peerjs';

const app = createApp(App).use(router).use(store).mount('#app')

const peer = new Peer();
peer.on('open', id => {
    store.commit('setPeerID', id)
})

peer.on('connection', (conn) => {
    app.config.globalProperties.$conn = conn;
    conn.on('data', (data) => {
        // Will print 'hi!'
        console.log(data);
    });
    conn.on('open', () => {
        conn.send('hello!');
    });
});
