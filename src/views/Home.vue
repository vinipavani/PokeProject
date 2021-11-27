<template>
    <div class="main-content">
        <PokeCard 
			v-for="pokemon in pokemonList"
			:key="pokemon.pokemonId"
            :pokemonName="pokemon.pokemonName"
            :pokemonId="pokemon.pokemonId"
            :type="pokemon.type"
            :img="pokemon.img"
        >
        <PokeModal :type="pokemon.type" />
        </PokeCard>
    </div>
</template>


<script>
import PokeCard from "@/components/PokeCard.vue";
import PokeModal from "@/components/PokeModal.vue";

const pokemonList = [
    {
        "pokemonName": "Scyther",
        "pokemonId": "123",
        "type": "bug",
        "img": "https://images.gameinfo.io/pokemon/256/p123f148.png"
    },
    {
        "pokemonName": "charizard",
        "pokemonId": "006",
        "type": "fire",
        "img": "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/04/Charizard-Pok%C3%A9mon-PNG.png"
    },
    {
        "pokemonName": "wartortle",
        "pokemonId": "008",
        "type": "water",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
    }
]

const data = {
    pokemonList
}

console.log(pokemonList)
console.log(data)

export default {
    name: "Home",
    components: {
        PokeCard, 
        PokeModal
    },
    data(){
        return data;
    },
    methods: {
        
    }
};
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
