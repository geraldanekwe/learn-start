import React, { Component } from 'react';
import Modal from 'react-modal';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '360px',
    height                : '262.5px',
    display               : 'flex',
    flexDirection         : 'column',
    justifyContent        : 'center',
    alignItems            : 'center'
  }
};

Modal.setAppElement('#root')

class SignUpModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        isEmailValid: true,
        isPasswordValid: true
      };
    }

    handleEmail = (e) => {
      this.setState({email: e.target.value});
    }

    handlePassword = (e) => {
      this.setState({password: e.target.value});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { email, password } = this.state;
      const isEmailValid = validateEmail(email);
      const isPasswordValid = password.length > 6;
      if (!isEmailValid || !isPasswordValid) {
        this.setState({
          isEmailValid,
          isPasswordValid
        })
      } else {
        this.props.closeModal();
      }
      function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
    }

    render() {
        const { isEmailValid, isPasswordValid } = this.state;
        const close_icon = "\u2573";
        return (
          <div>
            <Modal
              isOpen={this.props.isModalOpen}
              onRequestClose={this.props.closeModal}
              className="modal"
              >
              <p className="close-icon" onClick={this.props.closeModal}>{close_icon}</p>
              <h2>Sign up</h2>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="Email"
                  onChange={this.handleEmail}
                  style={ { backgroundColor: isEmailValid ? '#F4F4F4' : '#FFDDDB' } }
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handlePassword}
                  style={ { backgroundColor: isPasswordValid ? '#F4F4F4' : '#FFDDDB' } }
                />
                <br />
                <input className="submit" type="submit" name="submit" value="Continue" />
              </form>
            </Modal>
          </div>
        );
    }
}

export default SignUpModal;
