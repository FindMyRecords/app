import React from 'react';
import { observer, inject } from 'mobx-react';

import LoadingBar from './LoadingBar';
import TableResult from './TableResult';
import DiscogsResult from './DiscogsResult';
import Filters from './Filters';

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