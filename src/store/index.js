import { createStore } from 'vuex'
import {Player} from './player'
import {Playmat} from './playmat'

export default createStore({
  state: {
    peerID: "",
    role: "host"
  },
  mutations: {
    setPeerID(state, id){
      state.peerID = id
    },
    setRole(state, role) {
      state.role = role
    }
  },
  actions: {
  },
  modules: {
    client: Player,
    host: Player,
    playmat: Playmat,
  }
})
