import React from 'react';
import { observer, inject } from 'mobx-react';

import LoadingBar from './partials/LoadingBar';
import TableResult from './partials/TableResult';
import DiscogsResult from './partials/DiscogsResult';
import Filters from './partials/Filters';

@inject('resultStore')
@observer
export default class Results extends React.Component {
    render() {
        return (
            <section className="results">
                <LoadingBar />
                <DiscogsResult/>
                <Filters />
                <TableResult />
            </section>
        )
    }
}