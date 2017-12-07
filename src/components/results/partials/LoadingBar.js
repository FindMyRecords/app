import React from 'react'
import { inject, observer } from 'mobx-react';

@inject('resultStore')
@observer
export default class LoadingBar extends React.Component {
    render() {
        let props = this.props;
        return (
            <div className="progress-border">
                <div className="progress ">
                    <div className={`progress-bar bg-primary w-${props.resultStore.prototype.state.loadingBar}`} role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}