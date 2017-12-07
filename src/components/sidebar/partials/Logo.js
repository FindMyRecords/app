import React from 'react';
import logo from '../../../assets/img/logo.png';

export default class Logo extends React.Component {
    render () {
        return (
            <div>
                <h3> Find My Records </h3>
                <img className="logo center" src={logo}  alt={"Find My Records"}/>
            </div>
        )
    }
}
