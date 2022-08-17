import secret from '../secrets.json';
import Api from '../utils/api';

const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY =  secret.TMDB_API_KEY;


const tmdb =  new Api({
    baseUrl: API_BASE,
    searchParams: { api_key: API_KEY },
})

export default tmdb;