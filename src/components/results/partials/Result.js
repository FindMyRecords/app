import React from 'react'
import { observer, inject } from 'mobx-react';

@inject('resultStore')
@observer
export default class Result extends React.Component {

    render() {
        let props = this.props.juno;
        console.log(props)
        return (
            <tr>
                <th scope="row">{props.artists}</th>
                <td>{props.title}</td>
                <td>{props.price}</td>
                <td className={props.available ? 'green' : 'red'}><a target="_blank" href={props.url}> {props.available ? "Yes" : "No"} </a></td>
            </tr>
        )
    }
}
