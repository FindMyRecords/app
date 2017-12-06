import React from 'react'
import { inject } from 'mobx-react';

@inject('resultStore')
export default class SearchBar extends React.Component {
    search = () => {
        this.props.resultStore.prototype.getDiscogsUser(document.getElementById('search-term').value);
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" id="search-term" className="form-control" placeholder="Search a Discogs profile" />
                    </div>
                    <button type="button" className="btn btn-primary search-button" onClick={() => this.search()}> Search </button>
                </form>
            </div>
        )
    }
}
