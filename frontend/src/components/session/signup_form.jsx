import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
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
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user).then(() => {
      this.props.history.push('/tweets')
    });
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            
            <div className="session-form-input">
              <p className="form-prompt">What's your email?</p>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Enter your email."
              />
            </div>

            <div className="session-form-input">
              <p className="form-prompt">What should we call you?</p>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Enter a name for your profile."
              />
            </div>
            
            <div className="session-form-input">
              <p className="form-prompt">What's your first name?</p>
              <input type="text"
                value={this.state.firstname}
                onChange={this.update('firstname')}
                placeholder="Enter your first name."
              />
            </div>
            
            <div className="session-form-input">
              <p className="form-prompt">What's your last name?</p>
              <input type="text"
                value={this.state.lastname}
                onChange={this.update('lastname')}
                placeholder="Enter your last name."
              />
            </div>
            
            <div className="session-form-input">  
              <p className="form-prompt">Create a password</p>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Create a password."
              />
            </div>

            <div className="session-form-input">  
              <p className="form-prompt">Confirm your password</p>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm your password."
              />
            </div>

            <button onClick={this.handleSubmit}>Sign Up!</button>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
