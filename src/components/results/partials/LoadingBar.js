import React from 'react'
import { inject, observer } from 'mobx-react';

@inject('resultStore')
@observer
export default class LoadingBar extends React.Component {
    render() {
        let props = this.props;
        
        const progressBarStyle = {
            width: props.resultStore.prototype.state.loadingBar + '%'
        };

        return (
            <div className="progress-border">
                <div className="progress ">
                    <div style={progressBarStyle} className='progress-bar bg-primary' role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}