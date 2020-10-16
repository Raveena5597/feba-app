import React from 'react'
import { Link } from 'react-router-dom'

const Tabbar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-bottom navbar-nav">
            <div className="container">
                <center>
                    <Link to="/">
                        <button className="btn navbar-btn glyphicon glyphicon-globe"></button></Link>
                    <Link to="/login">
                        <button className="btn navbar-btn glyphicon glyphicon-user"
                        ></button></Link>
                </center>
            </div>
            <div className="container">
                <center>
                    <span className="explore ">Explore</span>
                    <span className="login">Login</span>
                </center>
            </div>
        </nav>
    )
}

export default Tabbar
