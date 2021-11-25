<style scoped src="./PokeCard.css"></style>
<script src="./PokeCard.js"></script>

<template>
      
    <div 
        class="card-container" 
        :class="type" 
    >
        <img class="pokemon-img" alt="pokemon" :src="img"/>
        <div class="card-text">
            <span> {{pokemonName+' - '+type}} </span>
            <span> {{'#'+ pokemonId}} </span>
        </div>
    </div>
    
</template>
