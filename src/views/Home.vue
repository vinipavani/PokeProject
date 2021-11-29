<template>
    <div class="main-content">
        <PokeCard 
			v-for="pokemon in pokemonList"
			:key="pokemon.id"
            :pokemonData="pokemon"
        >
        </PokeCard>
    </div>
</template>


<script>
import PokeCard from "@/components/PokeCard.vue";
import PokemonService from "@/services/PokemonService";

export default {
    name: "Home",
    components: {
        PokeCard, 
    },

    methods: {
        // Pega a lista de pokemons paginada de 20 em 20
        async getPokemons(){
            await PokemonService.getPokemons()
                .then((res) => {
                    this.next = res.data.next;
                    this.getPokemonsProperties(res.data.results);                   
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        // Pega os dados individuais de cada pokemon
        async getPokemonsProperties(pokemonList){
            let promises = pokemonList.map(pokemon => {
                return PokemonService.getPokemonByName(pokemon.name)
                    .then((res) => {
                        this.pokemonList.push(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            });
            await Promise.all(promises)
            this.pokemonList.sort((a,b)=> a.id-b.id)
        },
    },

    async mounted(){
        await this.getPokemons();
        console.log(this.pokemonList);
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
