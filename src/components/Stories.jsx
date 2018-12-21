import React, { Component } from 'react';
import Header from './Header.jsx';
import ProductCard from './ProductCard.jsx';

const product_data = [
  {
    title: "How I survived death.",
    name: "Jon Snow"
  },
  {
    title: "One Day I woke up, and I realized that I was dead for a bit.",
    name: "Jon Snow"
  },
  {
    title: "How I survived death.",
    name: "Jon Snow"
  }
]

class Stories extends Component {
    render() {
        return (
          <div className="stories">
            <Header />
            <div className="stories-title-area"><h2>Stories</h2></div>
            <div className="stories-section">
              <h3>Latest</h3>
              <div className="products-wrap">
                { product_data.map(({ name, title }, index) => <ProductCard key={index} name={name} title={title} />) }
              </div>
            </div>
            <div className="stories-section">
              <h3>Editor's Pick</h3>
              <div className="products-wrap">
                { product_data.map(({ name, title }, index) => <ProductCard key={index} name={name} title={title} />) }
              </div>
            </div>
          </div>
        );
    }
}

export default Stories;
