import { observable, action } from 'mobx';

import discogsService from '../services/DiscogsService';
import junoService from '../services/JunoService';

import WantItem from '../models/WantItem';
import DiscogsUser from '../models/DiscogsUser';

export default class ResultsStore {
    @observable state = ({
        discogsUser: null,
        wantList: [],
        currentPagination: 0,
        totalPagination: 0,
        nextWantlistUrl: '',
        resultJuno: [],
        selectFilters: false,
        loadingBar: 0,
        isParsing: false,
        filters: ['Juno']
    });

    @action getDiscogsUser = (name) => {
        this.newSearch();
        discogsService.getDiscogsUser(name)
            .then((response) => {
                this.state.discogsUser = new DiscogsUser(response.data);
                this.state.loadingBar = 50;
                this.getDiscogsWantList(this.state.discogsUser.wantlistUrl);
            })
            .catch((error) => {
                console.log(error);
                this.state.discogsUser = 'notFound';
                this.state.loadingBar = 100;
            })
    }

    @action getDiscogsWantList = (url, getResult = false) => {
        discogsService.getDiscogsWantList(url)
            .then((response) => {
                this.state.currentPagination = response.data.pagination.page;
                this.state.totalPagination = response.data.pagination.pages;
                this.state.nextWantlistUrl = response.data.pagination.urls.next;
                this.state.wantList = response.data.wants.map(want => new WantItem(want));
                this.state.loadingBar = 100;
                
                if(getResult) this.getResults();
            })
            .catch((error) => {
                console.log(error);
                this.state.wantList = 'notFound';
                this.state.loadingBar = 100;
            })
    }

    @action getResults = () => {
        this.state.loadingBar = 0;
        this.state.isParsing = true;
        for (let want of this.state.wantList) {
            junoService.get(want.artists[0].name, want.title).then(response => {
                this.state.loadingBar += (1/this.state.wantList.length) * 100;
                this.state.resultJuno.push(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    @action newSearch = () => {
        this.state.totalPagination = 0;
        this.state.currentPagination = 0;
        this.state.nextWantlistUrl = '';        
        this.state.selectFilters = false;
        this.state.isParsing = false;
        this.state.discogsUser = null;
        this.state.wantList = [];
        this.state.loadingBar = 0;
        this.state.resultJuno = [];        
    }
}


