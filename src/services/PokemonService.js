import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}); 

export default {
    getPokemons() {
        return apiClient.get('pokemon')
    }
}