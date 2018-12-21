import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './Header.jsx';

class Home extends Component {
    render() {
        return (
          <div className="home">
            <Header />
            <div className="first-section">
              <h1 style={ { marginBottom: '20px' } }>Stay hungry. Stay foolish.</h1>
              <p style={ { marginBottom: '32.5px' } }>Learn from the hottest startups in the world.</p>
              <button><Link className="nostyle" to="/stories">Read Now</Link></button>
            </div>
            <div className="panel">
              <h2 style={ { marginBottom: '30px' } }>Smart tools for founders.</h2>
              <p style={ { width: '500px', textAlign: 'center', color: '#8F8E8B' } }>LearnStart is the simplest way for startup founders to discover inspiring stories from startup founders from all over the world, all in one place.</p>
            </div>
            <div className="third-section">
              <div className="sub-section">
                <div className="sub-section-text" style={ { marginRight: '170px'} }>
                  <h2 style={ { marginBottom: '30px' } }>Only the hottest startups.</h2>
                  <p style={ { width: '425px', color: '#8F8E8B' } }>We hand-select only the hottest startups and our expert copywriters interview and produce every story.</p>
                </div>
                <div className="box"></div>
              </div>
              <div className="sub-section">
                <div className="box"></div>
                <div className="sub-section-text" style={ { marginLeft: '150px'} }>
                  <h2 style={ { marginBottom: '30px' } }>Simplest way to read.</h2>
                  <p style={ { width: '500px', color: '#8F8E8B' } }>Learn anything from your phone or from your computer, and continue where you left off anytime.</p>
                </div>
              </div>
              <div className="sub-section">
                <div className="sub-section-text" style={ { marginRight: '170px'} }>
                  <h2 style={ { marginBottom: '30px' } }>Free. Forever.</h2>
                  <p style={ { width: '425px', color: '#8F8E8B' } }>We're a non-profit project supported by Silicon Valley's top VCs and startup incubators. You won't have to pay a cent.</p>
                </div>
                <div className="box"></div>
              </div>
            </div>
            <div className="panel">
              <h2 style={ { marginBottom: '30px' } }>Let's get started.</h2>
              <button><Link className="nostyle" to="/stories">Read Now</Link></button>
            </div>
          </div>
        );
    }
}

export default Home;
