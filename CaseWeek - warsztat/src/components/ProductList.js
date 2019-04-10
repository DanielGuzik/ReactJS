import React, { Component } from 'react';
import ProductListItem from './ProductListItem';
import './productList.css';

class ProductList extends Component {
    render() {

        const productItems = this.props.products
            .map(product =>
                <ProductListItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    img={product.img}
                    price={product.price}
                    selectItem={this.props.selectItem}
                />
            );

        return (
            <ul className="product-list">
                {productItems}
            </ul>
        );
    }
}

export default ProductList;