import React from 'react'
import { inject } from 'mobx-react';

@inject('resultStore')
export default class SearchBar extends React.Component {
    search = (e) => {
        if(e) e.preventDefault();
        this.props.resultStore.prototype.getDiscogsUser(document.getElementById('search-term').value);
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" id="search-term" className="form-control" placeholder="Search a Discogs profile"
                        onKeyPress={(e) => {(e.key === 'Enter' ? this.search(e) : null)}} />
                    </div>
                    <button type="button" className="btn btn-primary search-button" onClick={() => this.search()}> Search </button>
                </form>
            </div>
        )
    }
}
