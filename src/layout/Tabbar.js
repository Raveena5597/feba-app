import React from 'react'

const Tabbar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-bottom navbar-nav">
            <div className="container">
                <center>
                    <a href="index.html">
                        <button className="btn navbar-btn glyphicon glyphicon-globe"></button></a>
                    <a href="login.html">
                        <button className="btn navbar-btn glyphicon glyphicon-user"
                        ></button></a>
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
