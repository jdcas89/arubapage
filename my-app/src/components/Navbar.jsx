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
                        <div className="social nav nav-masthead ml-md-auto">
                            
                        <li className="nav-item">
                                <div className="social"><a href="https://www.facebook.com/ArubaPage-562896297429688/" target="_blank" rel="noopener noreferrer" ><i className="fa fa-facebook-square fa-lg"></i></a></div>
                        </li>
                        <li className="nav-item">
                                <div className="social"><a href="https://www.instagram.com/arubapage/" target="_blank" rel="noopener noreferrer" ><i className="fa fa-instagram fa-lg"></i></a></div>
                        </li>
                        <li className="nav-item">
                                <div className="social"><a href="https://www.twitter.com/arubapage/" target="_blank" rel="noopener noreferrer" ><i className="fa fa-twitter fa-lg"></i></a></div>
                        </li>
                        </div>
                  </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;