<template>
    <div>
        <PokePageTop />
        <PokePageMiddle />
        <PokePageBottom />
    </div>
</template>

<script>
import PokemonService from "../services/PokemonService.js";
import PokePageTop from "../components/PokePageTop.vue";
import PokePageMiddle from "../components/PokePageMiddle.vue";
import PokePageBottom from "../components/PokePageBottom.vue";

export default {
    name: "PokemonPage",
    components: {
        PokePageTop,
        PokePageMiddle,
        PokePageBottom,
    },
    data() {
        return {
            pokemon: {}
        }
    },

    methods: {
        async getPokemonProperty(id){
            await PokemonService.getPokemonById(id)
                .then((res) => {
                    this.pokemon.data = res.data;
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },

    async created() {
        this.pokemon.id = this.$route.params.id;
        await this.getPokemonProperty(this.pokemon.id);
        console.log(this.pokemon);
        return {}
    },
}
</script>

<style scoped>
    @import "../assets/global.css";

</style>
