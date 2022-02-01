import { createStore } from 'vuex'
import {Player} from './player'
import {Playmat} from './playmat'

export default createStore({
  state: {
    peerID: "",
    role: "host",
    emitter: undefined
  },
  mutations: {
    setPeerID(state, id){
      state.peerID = id
    },
    setRole(state, role) {
      state.role = role
    },
    setEmitter(state, emitter) {
      state.emitter = emitter
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
