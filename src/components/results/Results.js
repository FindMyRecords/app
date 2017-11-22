import React from 'react'
import LoadingBar from './LoadingBar';
import TableResult from './TableResult';

export default class Results extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <LoadingBar />
                <TableResult />
            </div>
        )
    }
}