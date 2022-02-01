import { createStore } from 'vuex'
import {Player} from './player'

export default createStore({
  state: {
    peerID: ""
  },
  mutations: {
    setPeerID(state, id){
      state.peerID = id
    }
  },
  actions: {
  },
  modules: {
    client: Player,
    host: Player
  }
})
