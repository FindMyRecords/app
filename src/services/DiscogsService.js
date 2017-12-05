import discogsConfig from '../config/discogs.js';
import axios from 'axios';

class DiscogsService {
    constructor() {
        this.API_URL = discogsConfig.API_URL;
    }

    getDiscogsUser = (name) => {
        return axios.get(this.API_URL + `users/${name}`);     
    }

    getDiscogsWantList = (url) => {
        return axios.get(url);             
    }
}

const discogsService = new DiscogsService();
export default discogsService;