import React, { Component } from 'react';
import './productDetails.css';

class ProductDetails extends Component {

    render() {

        const { name, img, price, desc } = this.props.item;

        return (
            <div className="product-details">
                <div className="product-details__image-wrapper">
                    <img className="product-details__image" src={img} alt=""></img>
                </div>
                <div className="product-details__action-wrapper">
                    <h1>{name}</h1>
                    <p>$ {price}</p>
                    <button onClick={() => alert(`You bought ${name} za $ ${price}`)}>Buy</button>
                </div>
                <article className="product-details__description">{desc}</article>
                <button className="product-details__close-button" onClick={this.props.closeView}>X</button>
            </div>
        );
    }
}

export default ProductDetails;