import axios from 'axios';

const pokemonApi = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/all/'
});

export default pokemonApi;
