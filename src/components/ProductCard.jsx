import React, { Component } from 'react';
import Header from './Header.jsx';

class ProductCard extends Component {
    render() {
        return (
          <div className="product-card">
            <div className="product-box"></div>
            <div className="product-details">
              <h3>{ this.props.title }</h3>
              <div className="product-name-wrap">
                <div className="circle"></div>
                <p>{ this.props.name }</p>
              </div>
            </div>
          </div>
        );
    }
}

export default ProductCard;
