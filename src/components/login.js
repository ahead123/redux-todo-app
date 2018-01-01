import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import Form from '../components/Form';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      user_verified: false
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if(username!='' && password!= ''){
      this.props.loginUser(username, password)
    }
  }
  
  render() {
    const { users: { verified } } = this.props;
    return (
      <div className="col-md-12">
          <div className="row">
            <div className="col-md-12 justify-content-center mt-5">
              {
                verified
                ?
                <p className="display-4 text-center">Authentication Successful</p>
                :
                <p className="display-4 text-center">Login</p>
              }
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            {
              verified 
              ? 
              <Link to="/redux-todo-app">You may proceed marvelous one</Link>
              :
                <Form 
                onSubmit={event => this.handleLogin(event)}
                onchange1={event => this.setState({ password: event.target.value})}
                onchange2={event => this.setState({ username: event.target.value})} 
              />
            }
          </div>          
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

export default connect(mapStateToProps, { loginUser })(Login)