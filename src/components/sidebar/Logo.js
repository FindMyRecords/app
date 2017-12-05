import React from 'react';
import logo from '../../assets/img/logo.png';

export default class Logo extends React.Component {
    render () {
        return (
            <div>
                <img className="logo center" src={logo}  alt={"Find My Records"}/>
            </div>
        )
    }
}
