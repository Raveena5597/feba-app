import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="col-xs-16 col-md-4 col-sm-6 col-lg-3 col-xl-2">
                <div className="thumbnail">
                    <img src={"https://www.feba.co.in" + this.props.vendordata.coverImage.url} alt="Red Rose" />
                    <button className="favbtn">&hearts;</button>
                    <div className="picBottom">
                        <div>
                            {this.props.vendordata.vendor_super ?
                                <button className="supervendor">SUPER VENDOR </button> : <div />
                            }

                            {this.props.vendordata.vendor_city}
                            <span className="rating">4.8</span>
                            <span className="glyphicon glyphicon-star"></span>
                        </div>
                        <span className="nameOfVendor">{this.props.vendordata.vendor_title}</span>
                        <p className="costAndType">
                            <b className="cost">₹ {this.props.vendordata.vendor_service_price}</b>/ {this.props.vendordata.vendor_top_service}
                        </p>
                    </div>
                </div>
            </div >
        )
    }
}
export default Card
