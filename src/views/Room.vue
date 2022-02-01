<template>
    <v-container>
        Room: you are {{role}}
        <v-btn @click="send('send')">send</v-btn>
    </v-container>
</template>

<script>

export default {
   beforeRouteEnter(to, from, next) {
        next(vm => {
            if (!vm.$conn) {
                vm.$router.push("/")
            }
        })
    },
    mounted() {
        this.$emitter.on('peerData', data => {
            console.log('receive', data)
        })
    },
    computed: {
        role() {
            return this.$store.state.role
        }
    },
    methods: {
        send(data) {
            this.$conn.send(JSON.stringify(data))
        }
   }
}
</script>
