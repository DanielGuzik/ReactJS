import React from 'react';
import PortfolioItem from './PortfolioItem';
import Item from './Item';
import './Portfolio.css';

function PortfolioList() {
  return Item.map((item, index) => (
      <PortfolioItem
        key={index}
        image={Item[index].image}
        alt={Item[index].alt}
        title={Item[index].title}
        description={Item[index].desc}
        client={Item[index].client}
        demo={Item[index].demo}
      />
  ));
}

export default PortfolioList;