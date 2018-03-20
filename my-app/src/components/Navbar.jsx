import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav style={{ backgroundColor : '#3f90df'}} className="navbar navbar-expand-md navbar-dark">
            <div className="container">
            <a className="navbar-brand" href="/"><img src={require('../images/star.PNG')} alt="Thumbnail [100%x225]"/> ArubaPage.com</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                 <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="nav nav-masthead justify-content-center">
                        <li className="nav-item active">
                            <div><Link className="nav-link" to="/">Home</Link></div>
                        </li>
                        <li>
                            <div><Link className="nav-link" to="/about">About</Link></div>
                        </li>
                    </ul>
                  </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;