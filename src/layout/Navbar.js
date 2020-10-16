import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link className="navbar-brand" to="/`">
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
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/services"><span className="glyphicon glyphicon-home"></span> Wedding Services</Link></li>
                        <li><Link to="/makeup"><span className="glyphicon glyphicon-certificate"></span> MakeUp Courses</Link></li>
                        <li><Link to="/vendor"><span className="glyphicon glyphicon-log-in"></span> Vendor login</Link></li>
                        <li><Link to="/contact"><span className="glyphicon glyphicon-phone-alt"></span> Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
