import axios from 'axios';

const baseURL = 'https://api.coingecko.com/api/v3/';

const CryptoApi = axios.create({baseURL});

export default CryptoApi;
