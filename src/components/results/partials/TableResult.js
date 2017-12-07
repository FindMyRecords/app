import React from 'react';
import { inject, observer } from 'mobx-react';
import Result from './Result';

@inject('resultStore')
@observer
export default class TableResult extends React.Component {
    render() {
        let props = this.props;
        let content = null;

        if (this.props.resultStore.prototype.state.isParsing) {
            content =
                <div className="animated fadeIn">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Artist</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.resultStore.prototype.state.resultJuno.map(juno => {
                                <Result juno={juno} />
                            })}
                        </tbody>
                    </table>
                </div>
        }

        return (
            <div className="">
                {content}
            </div>
        )
    }
}
