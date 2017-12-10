import React from 'react'
import Logo from './partials/Logo';
import Searchbar from './partials/Searchbar';
import Footer from './partials/Footer';

export default class Sidebar extends React.Component {
    render () {
        return (
            <div className="col-2 sidebar">
                <Logo />
                <Searchbar />
                <Footer />
            </div>
        )
    }
}
