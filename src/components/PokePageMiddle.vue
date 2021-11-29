<template>
    <div class="main-content">

        <div >
            <h2 class="title1">Classic Sprites</h2>
            <img 
                v-for="(sprite, index) in classicSprites" 
                :key="index" 
                :src="sprite" 
                alt="pokemon sprite image"
                class="sprite-classic"
            >
        </div>  

        <div>
            <h2 class="title2">Other Sprites</h2>
            <img 
                v-for="(sprite, index) in otherSprites" 
                :key="index" 
                :src="sprite" 
                alt="pokemon sprite image"
                class="sprite-other"
            >
        </div> 

        <div>
            <h2>Generation sprites</h2>
            <img 
                v-for="(sprite, index) in versionSprites" 
                :key="index" 
                :src="sprite" 
                alt="pokemon sprite image"
                class="sprite-generations"
            >
        </div> 

    </div>
</template>


<script>
export default {
    name: "PokePageMiddle",
    props: ['pokemon'],
    methods: {
        // Função para fazer leitura do obj com as sprites e dividir na lista, recebe obj e lista como os parametros.
        makeSpriteLists(object, array) {
            let keys = Object.keys(object);
            keys.forEach(key => {
                if (key != 'other' && key != 'versions') {
                    if (object[key] != null && typeof(object[key]) == 'string') {
                        array.push(object[key]);
                    } 
                } else if (key == 'other') {
                    this.makeOtherSpriteList(object[key]);
                }  else if (key == 'versions' && object[key] != null) {
                    this.makeVersionSpriteList(object[key]);
                }
            });
        },

        //Função para atribuir as sprites de cada versão do jogo.
        makeVersionSpriteList(versionObjects) {
            let versionKeys = Object.keys(versionObjects);
            let versionGameKeys = [];
            versionKeys.forEach(generation => {
                if(generation != null){
                    let generationKeys = Object.keys(versionObjects[generation]);
                    generationKeys.forEach((generationKey) => {
                        versionGameKeys.push(versionObjects[generation][generationKey]);
                    });
                }
            });
            versionGameKeys.forEach( sprite => {
                this.makeSpriteLists(sprite , this.versionSprites);
            });
        },

        makeOtherSpriteList(otherObjects) {
            let keys = Object.keys(otherObjects);
            keys.forEach((key)=>{
                this.makeSpriteLists(otherObjects[key], this.otherSprites);
            });
        }
    },

    computed: {

    },

    data() {
        return {
            classicSprites: [],
            otherSprites: [],
            versionSprites: [],
        };
    },

    mounted() {
        console.log(this.pokemon);
        this.makeSpriteLists(this.pokemon.data.sprites, this.classicSprites);
    },
}
</script>


<style scoped>
@import '../assets/global.css';

.main-content{
    height: 30vh;
}

.title1 {
    text-align: start;
    margin-left: 5%;
} .title2 {
    text-align: end;
    margin-right: 5%;
}
.sprite-classic{
    width: 96px;
    height: 96px;
}

.sprite-other{
    width: 150px;
    height: 150px;
}

.sprite-generations {
    width: 56px;
    height: 56px;
}

</style>