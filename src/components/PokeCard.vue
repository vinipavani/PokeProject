<template>
      
    <div 
        class="card-container" 
        :class="pokemonData.types[0].type.name"
    >   
        <router-link :to="`/pokemon/${pokemonData.id}`">
            <img class="pokemon-img" alt="pokemon" :src="pokemonData.sprites.front_default" />
            <div class="card-text">
                    <span> {{ pokemonData.name }} </span>
                    <span> {{'#' + pokemonIndex }} </span> 
            </div>
        </router-link>
    </div>
    
</template>


<script>
export default {
    name: "PokeCard",
    props: [
        'pokemonData',
    ],
    computed: {
        pokemonIndex(){
            let formatedIndex;
            if( this.pokemonData.id < 10 ) {
                formatedIndex = '00' + this.pokemonData.id;
                return formatedIndex;
            } else if( this.pokemonData.id < 100 ) {
                formatedIndex = '0' + this.pokemonData.id;
                return formatedIndex;
            }
            return this.pokemonData.id;
        }
    }
};
</script>


<style scoped>
    @import '../assets/global.css';

    .card-container {
        width:  180px;
        height: 200px;
        border-radius: 1.5rem;

        box-shadow: 2.5px 2.5px rgba(0,0,0,0.4);
        transition: 0.4s ease-out;
        margin: 10px;
        
    } .card-container:hover {
        box-shadow: 5px 5px rgba(0,0,0, 0.6);
    }

    .pokemon-img{
        height: 70%;
        width: 75%;

        margin-top: 5px;
        border-radius: 150px;

        background: url(../assets/Pokeball.png) rgba(0,0,0, 0.1);
        background-size: contain;
    }

    .card-text{
        display: flex;
        flex-direction: column;
    }
    a{
        text-decoration: none;
        color: #000;
    }
</style>