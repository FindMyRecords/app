import junoConfig from '../config/juno.js';
import axios from 'axios';

class JunoService {
    constructor() {
        this.API_URL = junoConfig.API_URL;
    }

    get = (artist, title) => {
        return axios.get(this.API_URL + `reference?artists=${encodeURIComponent(artist)}&title=${encodeURIComponent(title)}`);     
    }
}

const junoService = new JunoService();
export default junoService;