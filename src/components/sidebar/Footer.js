import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="container">
                <div className="row align-items-start">
                    <div className="col">
                        <ul className="list-inline footer">
                            {/* <li class="list-inline-item">Find My Records ©</li> */}
                            {/* <li class="list-inline-item">Donation</li> */}
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}
