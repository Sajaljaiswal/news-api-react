import React, { Component } from 'react'
import './Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <div className="left">
                        <div>National News</div>
                    </div>

                    <div className="mid">
                        <ul className="navbar">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                </header>
            </>
        )
    }
}

export default Navbar
