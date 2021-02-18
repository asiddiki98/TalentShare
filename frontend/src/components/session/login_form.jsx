import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../assets/session.css';
import Chat from '../chat/chat'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/browse');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
  }
  
  handleDemo(e) {
    e.preventDefault();
    const demo = {
      email: "demo@demo.com",
      password: "demouser"
    }
    this.props.login(demo)
      // .then(() => this.props.history.push('/browse'));
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="login-form-container session-form">
        <form onSubmit={this.handleSubmit}>
          
          <div className="session-form-input">
            <p className="form-prompt">Email</p>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <p className="login-errors">{this.state.errors.email}</p>
          </div>

          <div className="session-form-input">
            <p className="form-prompt">Password</p>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <p className="login-errors">{this.state.errors.password}</p>
          </div>

          <div className="login-form-footer">
            <div className="session-switch">Need an account? <Link to="/signup">Sign Up!</Link></div>
            <div className="login-buttons-container">
              <button id="login-button">login</button>
              <button id="demo-button-login" onClick={this.handleDemo}>demo login</button>
            </div>
          </div>  

        </form>

        {/* <Chat /> */}
      </div>
    );
  }
}

export default withRouter(LoginForm);