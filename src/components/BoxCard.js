/**
 * Created by hakonhanesand on 2/6/17.
 */

import * as React from "react";
import {fetchBoxes} from "../firebase/firebase";

class BoxCard extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "",
            vendorName: "",
            description: "",
            price: "",
            rating: ""
        };
    }

    componentDidMount() {

        fetchBoxes(this.props.path, data => {
            console.log(JSON.stringify(data));
            this.setState({
                name: data.name,
                vendorName: data.vendorName,
                description: data.brief,
                price: data.price,
                rating: data.rating
            });
        })
    }

    render() {
        return <div className="card">
            <a href="product.php?category=All&amp;box_id=6">
                <img className="card-img-top" src="http://api.instacrate.me/images/1090F931-F566-4338-80FA-3EB3FEBC2859.png" alt=""/>
            </a>
            <div className="card-block">
                <h3 className="card-title title-text">
                    <a href="product.php?category=All&amp;box_id=6">{ this.state.name }</a>
                </h3>
                <h5 className="card-text vendor-text">by { this.state.vendorName }</h5>
                <p className="card-text blurb-text">{ this.state.description }</p>
                <h3 className="card-text price-text-index float-xs-left">${this.state.price}/month</h3>
                <h3 className="card-text rating-text float-xs-right">{this.state.rating}
                    <i className="fa fa-star"/>
                </h3>
                <a href="add.php?id=6">
                    <h4 className="btn btn-subscribe btn-blue">Add to Cart</h4>
                </a>
            </div>
        </div>
    }
}

export {BoxCard}
