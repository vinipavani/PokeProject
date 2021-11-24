<style scoped src="./PokeCard.css"></style>
<script src="./PokeCard.js"></script>

<template>
      
    <div 
        class="card-container" 
        v-bind:class="type" 
    >
        <img class="pokemon-img" alt="pokemon" :src="img" />
        <div class="card-text">
            <span> {{pokemonName}} </span>
            <span> {{'#'+pokemonId}} </span>
        </div>
    </div>
    
</template>
