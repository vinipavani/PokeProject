<template>
    <div class="main-content">
        <PokeCard 
			v-for="pokemon in pokemonList"
			:key="pokemon.data.id"
            :pokemonData="pokemon.data"
        >
            <PokeModal :pokemonDataModal="pokemon.data" />
        </PokeCard>
    </div>
</template>


<script>
import PokeCard from "@/components/PokeCard.vue";
import PokeModal from "@/components/PokeModal.vue";
import PokemonService from "@/services/PokemonService";
import Vue from "vue";

export default {
    name: "Home",
    components: {
        PokeCard, 
        PokeModal
    },

    methods: {
        // Pega a lista de pokemons paginada de 20 em 20
        async getPokemons(){
            await PokemonService.getPokemons()
                .then((res) => {
                    this.pokemonList = this.pokemonList.concat(res.data.results);
                    this.next = res.data.next;                   
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        // Pega os dados individuais de cada pokemon
        async getPokemonsProperties(){
            await this.pokemonList.forEach(pokemon => {
                PokemonService.getPokemonByName(pokemon.name)
                    .then((res) => {
                        pokemon.data = {}
                        Vue.set(pokemon, 'data', res.data);
                        console.log(pokemon);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            });
        },
    },

    async mounted(){
        await this.getPokemons();
        await this.getPokemonsProperties();
        return {};
    },

    data(){
        return {
            pokemonList: [],
            next: "",
        };
    },
}
</script>


<style scoped>
    @import '../assets/global.css';
    .main-content{
        display: flex;
        width: 90vw;
        margin: 0 auto;
        flex-wrap: wrap;
    }
</style>
