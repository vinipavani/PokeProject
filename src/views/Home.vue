<style scoped src="./Home.css"></style>
<script src="./Home.js"></script>

<template>
    <div class="main-content">
        <PokeCard 
			v-for="pokemon in pokemonList"
			:key="pokemon.pokemonId"
            :pokemonName="pokemon.pokemonName"
            :pokemonId="pokemon.pokemonId"
            :type="pokemon.type"
            :img="pokemon.img"
        />
    </div>
</template>

