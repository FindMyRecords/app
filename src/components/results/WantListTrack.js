import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class WantListTrack extends React.Component {
    render() {
        let track = this.props.track;

        return (
            <div className="col-12">
                <div className="wantlist-track card text-white bg-dark mb-2 animated fadeIn ">
                    <div className="card-body custom-card-padding">
                        <div>
                            <p className="card-title"> {track.basic_information.title}
                            &nbsp; - &nbsp;
                                <span className="artists">
                                        {track.basic_information.artists.map(artist => {
                                            return artist.name
                                        })}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
