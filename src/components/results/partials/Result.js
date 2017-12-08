import React from 'react'
import { observer, inject } from 'mobx-react';

@inject('resultStore')
@observer
export default class Result extends React.Component {

    render() {
        console.log(this.props);
        let props = this.props;

        return (
            <tr>
                <th scope="row">{props.juno.data.artists}</th>
                <td>{props.juno.data.title}</td>
                <td>{props.juno.data.price}</td>
                <td>{props.juno.data.available ? "Yes" : "No"}</td>
            </tr>
        )
    }
}
