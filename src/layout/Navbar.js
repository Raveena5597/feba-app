import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="main-container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="https://www.feba.co.in/static/media/logo.9f98b1b6.png" width="40" height="30" alt="" />
                                    </td>
                                    <td> Feba</td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="services.html"><span className="glyphicon glyphicon-home"></span> Wedding Services</a></li>
                        <li><a href="makeup.html"><span className="glyphicon glyphicon-certificate"></span> MakeUp Courses</a></li>
                        <li><a href="vendor.html"><span className="glyphicon glyphicon-log-in"></span> Vendor login</a></li>
                        <li><a href="contact.html"><span className="glyphicon glyphicon-phone-alt"></span> Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
