import React from 'react'
import Commands from './Commands';
import Filters from './Filters';
import Logo from './Logo';
import Searchbar from './Searchbar';
import Footer from './Footer';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Logo />
                <Searchbar />
                <Filters />
                <Commands />
                <Footer />
            </div>
        )
    }
}
