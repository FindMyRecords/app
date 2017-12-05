import React from 'react'
import Logo from './Logo';
import Searchbar from './Searchbar';
import Footer from './Footer';

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
