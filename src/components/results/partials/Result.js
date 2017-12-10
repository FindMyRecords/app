import React from 'react'
import { observer, inject } from 'mobx-react';

@inject('resultStore')
@observer
export default class Result extends React.Component {

    render() {
        let props = this.props.juno.data;

        return (
            <tr>
                <th scope="row">{props.artists}</th>
                <td>{props.title}</td>
                <td>{props.price}</td>
                <td className={props.available ? 'green' : 'red'}>{props.available ? "Yes" : "No"}</td>
            </tr>
        )
    }
}
