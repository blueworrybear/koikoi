<template>
    <v-container>
        Room: you are {{role}}
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
    computed: {
        role() {
            return this.$store.state.role
        }
    }
}
</script>
