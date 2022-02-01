<template>
  <div>
    <HelloWorld/>
    {{peerID}}
    <v-text-field v-model="peer"></v-text-field>
    <v-btn @click="conn"></v-btn>
    <v-btn @click="send">send</v-btn>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data: () => ({
    peer: ""
  }),
  computed: {
    peerID() {
      return this.$store.state.peerID
    }
  },
  methods: {
    conn() {
      console.log(this.$bear);
      this.$connectServer(this.peer)
    },
    send() {
      this.$conn.send('send')
    }
  }
};
</script>
