import React, { Component } from 'react';
import Card from './Card';
import FebaData from '../data.json';

function Fetchcards() {
    var loadData = JSON.parse(JSON.stringify(FebaData));
    var cards = [];
    for (var i = 0; i < loadData.rows.length; i++) {
        cards.push(<div> <Card key={loadData.rows[i].vendor_id.toString()} vendordata={loadData.rows[i]} /></div>)
    }
    return (
        <div>
            <div className="results">
                <p className="belownav-1">Bridal MakeUp Artist</p>
                <p className="belownav-2">Showing <strong>{loadData.totalVendors}+ results</strong></p>
            </div>
            <div>
                {cards}
            </div>
        </div>
    )
}

class Results extends Component {
    render() {
        return (
            <div>
                <Fetchcards />
            </div>
        )
    }
}

export default Results