import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../assets/session.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          
          <div className="session-form-input">
            <p className="form-prompt">Email</p>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <p className="session-errors">{this.state.errors.email}</p>
          </div>

          <div className="session-form-input">
            <p className="form-prompt">Password</p>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <p className="session-errors">{this.state.errors.password}</p>
          </div>

          <div className="session-form-footer">
            <div className="session-switch">Need an account? <Link to="/signup">Sign Up!</Link></div>
            <button>Submit</button>
          </div>  
          
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);