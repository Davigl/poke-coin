import axios from 'axios';

const currencyApi = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/all/'
});

export default currencyApi;
