import React from 'react'
import { observer, inject } from 'mobx-react';
import WantListTrack from './WantListTrack';

@inject('resultStore')
@observer
export default class DiscogsResult extends React.Component {
    parseWantList = (url) => {
        document.getElementById('user-discogs').classList.remove("fadeIn");
        document.getElementById('user-discogs').className += ' fadeOutRight';
        setTimeout(() => {
            this.props.resultStore.prototype.state.selectFilters = true;
        }, 400);
        setTimeout(() => {
            document.getElementById('user-discogs').style.display = "none";
         }, 2000);
    }

    render() {
        let user = this.props.resultStore.prototype.state.discogsUser;
        let content = null;

        if (this.props.resultStore.prototype.state.discogsUser === null) {
            content = null
        }
        else if (this.props.resultStore.prototype.state.discogsUser === "notFound") {
            content = <div className="alert alert-danger" role="alert">
                User not found.
          </div>
        }
        else {
            content =
                <div id="user-discogs" className="animated fadeIn">

                    <div className="card text-white bg-dark mb-3 animated fadeIn">
                        <div className="card-header">{user.username}</div>
                        <div className="card-body flex">
                            <img src={user.avatarUrl} alt="Avatar Discogs" className="discogs-user-picture img-thumbnail" />
                            <div>
                                <h4 className="card-title">Rating average : {user.ratingAvg}</h4>
                                <p className="card-text">{user.location}</p>
                            </div>
                            <button type="button" className="btn btn-primary wantlist-button" onClick={() => this.parseWantList(user.wantlistUrl)}> Parse WantList </button>
                        </div>
                    </div>
                    <h4 className="some-of-tracks"> Some of his tracks </h4> <hr />
                    <div className="row no-negative-margin">
                        {this.props.resultStore.prototype.state.wantList.slice(0, 5).map(track => {
                            return <WantListTrack key={track.id} track={track} />
                        })}
                    </div>
                </div>
        }

        return (
            <div> {content} </div>
        )
    }
}