<template>
    <div>
        <div class="main-content-top">
            <div class="left-content">
                <img :src="imgSrc" alt="pokemon image">
                <div>  
                    <p> Name: {{pokemon.data.name}} </p>
                    <p class="type-content">
                        <span>Type:</span>
                        <span 
                            class="type-item" 
                            :class="pokemonMainType"
                        > 
                            {{ pokemonMainType }} 
                        </span>
                        <span 
                            class="type-item" 
                            :class="pokemonSecondaryType"
                        > 
                            {{ pokemonSecondaryType }} 
                        </span>
                    </p>
                    <p> Specie: {{ pokemonSpecies }} </p>
                    <p> Pokedex id: {{'#'+ pokemonIndex}} </p>    
                </div>
            </div>

            <div class="right-content">
                <h2>
                    Games:       
                </h2>
                <div>
                    <ul class="game-list">
                        <li 
                            v-for="(gameIndex, index) in gameList"
                            :key="index"
                        >
                        {{ gameIndex.version.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="main-content-bottom">
            
        </div>

    </div>
</template>


<script>
export default {
    name: "PokePageTop",
    props: ['pokemon'],
    methods: { },
    computed: {
        imgSrc(){
            if(this.pokemon.data.sprites != undefined)
                return this.pokemon.data.sprites.other.home.front_default;
            return '';    
        },
        pokemonMainType(){
            if(this.pokemon.data.types != undefined)
                return this.pokemon.data.types[0].type.name;
            return '';
        },
        pokemonSecondaryType(){
            if(this.pokemon.data.types[1])
            if(this.pokemon.data.types[1] != undefined)
                return this.pokemon.data.types[1].type.name;
            return '';
        },
        pokemonSpecies(){
            if(this.pokemon.data.species != undefined)
                return this.pokemon.data.species.name;
            return '';
        },
        pokemonIndex(){
            let formatedIndex;
            if( this.pokemon.data.id < 10 ) {
                formatedIndex = '00' + this.pokemon.data.id;
                return formatedIndex;
            } else if( this.pokemon.data.id < 100 ) {
                formatedIndex = '0' + this.pokemon.data.id;
                return formatedIndex;
            }
            return this.pokemon.data.id;
        },
        gameList(){
            if(this.pokemon.data.game_indices)
                return this.pokemon.data.game_indices;
            return [];
        }
    },
    mounted() {
        console.log(this.pokemon);
    },
}

</script>


<style scoped>
    @import '../assets/global.css';

    .main-content-top {
        display: flex;
        width: 100%;
        height: 35vh;
        flex-flow: wrap;
        justify-content: space-between;
    }

    .left-content{
        display: flex;
        background-color: rgb(225, 225, 225);
        border-radius: 16px;
        padding: 20px;
        width: 40%;
        min-width: 400px;
        max-width: 450px;
    } .left-content img{
       width: 220px;
       height: auto;
       justify-items: center;
    } .left-content div{
        text-align: start;
        width: 50%;
    }

    .type-content{
        display: flex;
        align-items: center;
    }
    .type-item{
        padding: 3px;
        margin: 1%;
        border-radius: 5px;
    }

    .right-content {
        width: 50%;
        text-align: start;
        padding: 10px;
    }.right-content div{
        display: flex;
        justify-content: center;
    }

    .game-list {
        -moz-column-count: 3;
        -moz-column-gap: 35px;
        -webkit-column-count: 3;
        -webkit-column-gap: 35px;
        column-count: 3;
        column-gap: 35px;
        justify-content: center;
    }

    .main-content-bottom{

    }
</style>