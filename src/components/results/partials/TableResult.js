import React from 'react';
import { inject, observer } from 'mobx-react';
import Result from './Result';
import LoadMoreButton from './LoadMoreButton';

@inject('resultStore')
@observer
export default class TableResult extends React.Component {
    render() {
        let props = this.props.resultStore.prototype.state;
        let content = null;

        if (props.isParsing) {
            content =
                <div className="animated fadeIn results-container">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th className="table-header" scope="col">Artist</th>
                                <th className="table-header" scope="col">Title</th>
                                <th className="table-header" scope="col">Price</th>
                                <th className="table-header" scope="col">Juno</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.resultJuno.map(juno => {
                                if (juno.data.name !== undefined || juno.data.match === true)
                                    return <Result key={juno.data.title} juno={juno} />
                            })}
                        </tbody>
                    </table>
                    <LoadMoreButton />
                </div>
        }

        return (
            <div>
                {content}
            </div>
        )
    }
}
