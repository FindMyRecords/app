import React from 'react'
import { observer, inject } from 'mobx-react';

@inject('resultStore')
@observer
export default class Filters extends React.Component {
    saveFilters = () => {
        document.getElementById('filters').className += ' animated fadeOut';
        this.props.resultStore.prototype.getResults();
    }

    render() {
        let content = null;
        if (this.props.resultStore.prototype.state.selectFilters === true) {
            content =
                <div className="card text-white bg-dark mb-3 animated fadeIn">
                    <div className="card-header">Select sellers</div>
                    <div className="card-body ">
                        <div className="card-text filters-centering">
                            <div className="animated fadeIn">
                                <div className="switch_box">
                                    <input type="checkbox" className="switch_1" defaultChecked />
                                    <p className="label-filters"> Juno </p>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => this.saveFilters()} type="button" className="btn btn-primary search-button mt-5"> Parse WantList </button>
                    </div>
                </div>
        }

        return (
            <div className="absolute-position" id="filters">
                {content}
            </div>
        )
    }

}