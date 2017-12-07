import React from 'react'
import { observer } from 'mobx-react';

@observer
export default class Result extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div></div>
        )
    }
}