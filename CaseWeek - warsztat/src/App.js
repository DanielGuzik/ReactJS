import React from 'react';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import findSelectedProduct from './utils/findSelectedItem';
import { fruitsAndVegetables } from './mocks/mock';
import './App.css';



class App extends React.Component {
  state = ({ selectedItem: null });

  selectItem = id => {
    const selectedItem = findSelectedProduct(fruitsAndVegetables, id);
    this.setState({ selectedItem })
  }

  deselectItem = () => {
    this.setState({ selectedItem: null });
  }

  render() {
    return (
      <div>
        {
          this.state.selectedItem ?
            <ProductDetails
              item={this.state.selectedItem}
              closeView={this.deselectItem}
            /> :
            <ProductList
              products={fruitsAndVegetables}
              selectItem={this.selectItem}
            />
        }
      </div>
    );
  }
}

export default App;