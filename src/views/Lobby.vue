<template>
    <v-container>
        <v-card>
            <v-card-header>
                <v-card-header-text>
                    <v-card-title>Koi-Koi Online</v-card-title>
                </v-card-header-text>
            </v-card-header>
            <v-card-text>
                <v-switch v-model="host" :label="host?'Host':'Client'" @change="swithRole"></v-switch>
                <div v-if="host">Your ID: {{peerID}}</div>
                <v-text-field v-else v-model="opponentPeerID" label="Opponent's ID" dense solo></v-text-field>
            </v-card-text>
            <v-card-actions v-if="!host">
                <v-btn color="secondary" @click="connect">Connect</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        host: true,
        opponentPeerID: ""
    }),
    computed: {
        peerID() {
            return this.$store.state.peerID
        }
    },
    methods: {
        connect() {
            this.$connectServer(this.opponentPeerID)
        },
        swithRole() {
            const role = this.host ? "host" : "client"
            this.$store.commit('setRole', role)
        }
    }
}
</script>
