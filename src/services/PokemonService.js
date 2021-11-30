import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}); 

export default {
    //Pega nome e url com os dados de cada pokemon paginado para pegar de 20 em 20
    getPokemons() {
        return apiClient.get('pokemon');
    },

    //Traz os dados do pokemon e buscando pelo nome dele
    getPokemonByName(name) {
        return apiClient.get('pokemon/' + name);
    },

    //Traz os dados do pokemon e buscando pelo nome dele
    getPokemonById(id) {
        return apiClient.get('pokemon/' + id);
    },

    //Recebe o id do pokemon e retorna as informações de sua/suas evoluções.
    getPokemonSpecies(id) {
        return apiClient.get('pokemon-species/' + id);
    },

    getPokemonEvolutionChainByURL(url){
        return axios.get(url , 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }   
            }
        )
    },

    getPokemonsByURL(url){
        return axios.get(url , 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }   
            }
        )
    }

}