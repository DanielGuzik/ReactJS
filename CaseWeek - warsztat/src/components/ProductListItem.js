import React from 'react';
import './productListItem.css';

const ProductListItem = ({ id, img, name, price, selectItem }) => {

    const onClickHandler = () => selectItem(id);

    return (
        <li className="product-list-item" onClick={onClickHandler}>
            <div className="product-list-item__image-wrapper">
                <img className="product-list-item__image" src={img} alt=""></img>
            </div>
            <div className="product-list-item__element">{name}</div>
            {/*Example BEM*/}
            <div className="product-list-item__element product-list-item__element--change-color">$ {price}</div>
        </li>
    );
}

export default ProductListItem;