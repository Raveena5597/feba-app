import React from 'react'

const SecondNav = () => {
    return (

        <nav className="navbar navbar-default">
            <br /><br />
            <div className="location-container"><br />
                <button className="btn btn-outline-white" type="button"><a href="city.html" className="cityAll">City : All</a>
                </button>

                <button className="btn btn-outline-black" type="button"><a href="city.html"
                    className="cityAll">Category : Bridal MakeUp Artist</a></button>
            </div>
        </nav>
    )
}
export default SecondNav;
