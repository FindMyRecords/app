import { observable, action } from 'mobx';

import discogsService from '../services/DiscogsService';
import junoService from '../services/JunoService';

import WantItem from '../models/WantItem';
import DiscogsUser from '../models/DiscogsUser';

export default class ResultsStore {
    @observable state = ({
        discogsUser: null,
        resultsJuno: [],
        resultsHVA: [],
        loadingBar: 0,
        isParsing: false,
        wantList: [],
        filters: ["Juno"],
        selectFilters: false
    });

    @action getDiscogsUser = (name) => {
        this.state.selectFilters = false;
        this.state.isParsing = false;
        this.state.wantList = [];
        this.state.discogsUser = null;
        this.state.loadingBar = 0;
        discogsService.getDiscogsUser(name)
            .then((response) => {
                this.state.discogsUser = new DiscogsUser(response.data);
                this.state.loadingBar = 25;
                console.log(this.state.discogsUser.wantlistUrl);
                this.getDiscogsWantList(this.state.discogsUser.wantlistUrl);
            })
            .catch((error) => {
                console.log(error);
                this.state.discogsUser = 'notFound';
                this.state.loadingBar = 100;
            })
    }

    @action getDiscogsWantList = (url) => {
        discogsService.getDiscogsWantList(url)
            .then((response) => {
                this.state.wantList = response.data.wants.map(want => new WantItem(want));
                this.state.loadingBar = 100;
            })
            .catch((error) => {
                console.log(error);
                this.state.wantList = 'notFound';
                this.state.loadingBar = 100;
            })
    }

    @action getResults = () => {
        this.state.isParsing = true;
        // for(let want of this.state.wantList) {
        //     this.junoService.get(want.basic_information.artists[0].name, want.basic_information.title).then(response => {
        //         this.resultJuno.push(response);
        //     })           
        // }
    }
}


