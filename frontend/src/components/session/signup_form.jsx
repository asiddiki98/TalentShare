import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../assets/session.css';

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
      errors: {},
      
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
   
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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
      password2: this.state.password2,

    };

    this.props.signup(user)
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
      
      <div className="signup-form-container session-form">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            
            <div className="session-form-input">
              <p className="form-prompt">Email</p>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Enter your email"
              />
              <p className="session-errors">{this.state.errors.email}</p>
            </div>

            <div className="session-form-input">
              <p className="form-prompt">
                Username
                
              </p>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Enter Username"
              />
              <p className="session-errors">{this.state.errors.username}</p>
            </div>
            
            <div className="session-form-input">
              <p className="form-prompt">Name</p>
              <div className="name-input-fields">
                <div>

                  <input type="text"
                    value={this.state.firstname}
                    onChange={this.update('firstname')}
                    placeholder="Enter First name"
                  />
                  <p className="session-errors">{this.state.errors.firstname}</p>
                </div>
                <div>

                  <input type="text"
                    value={this.state.lastname}
                    onChange={this.update('lastname')}
                    placeholder="Enter Last name"
                  />
                  <p className="session-errors">{this.state.errors.lastname}</p>
                </div>
              </div>
            </div>
            
            <div className="session-form-input">  
              <p className="form-prompt">Password</p>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Enter Password"
              />
              <p className="session-errors">{this.state.errors.password}</p>
            </div>

            <div className="session-form-input">  
              <p className="form-prompt">Confirm Password</p>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm your password"
              />
              <p className="session-errors">{this.state.errors.password2}</p>
            </div>

            <div className="session-form-footer">
              <div className="session-switch">Already have an account? <Link to="/">Login!</Link></div>
              <button onSubmit={this.handleSubmit}>Continue</button>
            </div>
          </div>
          
        </form>
        
      </div>
    );
  }
}

export default withRouter(SignupForm);
