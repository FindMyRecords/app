import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('resultStore')
@observer
export default class LoadMoreButton extends React.Component {

    loadMore() {
        this.props.resultStore.prototype.getDiscogsWantList(this.props.resultStore.prototype.state.nextWantlistUrl, true)
    }

    render() {
        let content = null;
        let props = this.props.resultStore.prototype.state;

        if (props.loadingBar > 99.9 && props.loadingBar < 100.1 && props.currentPagination !== props.totalPagination) {
            content = <button type="button" className="btn btn-primary animated fadeIn" onClick={() => this.loadMore()}> Load more  </button>
        }

        return (
            <div className="text-center load-more-button">
                {content}
            </div>
        )
    }
}