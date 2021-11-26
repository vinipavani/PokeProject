<template>
      
    <div 
        class="card-container" 
        :class="type" 
        @click="showModal=!showModal"
    >
        <img class="pokemon-img" alt="pokemon" :src="img"/>
        <div class="card-text">
            <span> {{pokemonName+' - '+type}} </span>
            <span> {{'#'+ pokemonId}} </span>
            <slot 
                v-if="showModal"
            />
        </div>
    </div>
    
</template>


<script>
export default {
    name: "PokeCard",
    data(){
        return {
        'showModal': false,
        }
    },
    props: [
        'pokemonId',
        'pokemonName',
        'type',
        'img'
    ],
    methods: {
        showConsole(msg) {
            console.log(msg);
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
        width: 185px;
        height: 205px;
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
        justify-content: space-evenly;
    }
</style>