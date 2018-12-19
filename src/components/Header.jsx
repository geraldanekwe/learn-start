import React, { Component } from 'react';
import SignUpModal from './SignUpModal.jsx';

class Header extends Component {
    constructor(props) {
      super();
      this.state = {
        isModalOpen: false
      }
    }

    handleModal = () => {
      let { isModalOpen } = this.state;
      this.setState({ isModalOpen: !isModalOpen });
    }
    render() {
        return (
            <div className="header">
              <span className="company-name">LearnStart</span>
              <a className="sign-up" onClick={this.handleModal}>Sign up</a>
              <div style={ { position: 'absolute' }}>
                <SignUpModal
                  isModalOpen={this.state.isModalOpen}
                  closeModal={this.handleModal}
                />
              </div>
            </div>
        );
    }
}

export default Header;
