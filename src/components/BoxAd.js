/**
 * Created by hakonhanesand on 2/6/17.
 */

import * as React from "react";
import {fetchBoxes} from "../firebase/firebase";

class BoxAd extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "",
            description: "",
        };
    }

    componentDidMount() {

        fetchBoxes(this.props.path, data => {
            this.setState({
                name: data.name,
                description: data.brief,
            });
        })
    }

    render() {
        return (
        		<div className="ad">
					<image src="product.php?category=All&amp;box_id=6"/>
					<div className="ad-text">
						<h4 className="ad-title green-text">GymBag</h4>
						<p>the best fitness box that helps keep you fit!</p>
						<a href="http://google.com" className="btn-ad">subscribe</a>
					</div>	
				</div>
        );
    }
}

export {BoxAd}
