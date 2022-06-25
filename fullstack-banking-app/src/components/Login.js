import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from '../utils/common';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errorMsg: ''
    };

    handleLogin = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const fieldsToValidate = [{ email }, { password }];

        const allFieldsEntered = validateFields(fieldsToValidate);
        if (!allFieldsEntered) {
            this.setState({
                errorMsg: {
                    signin_error: 'Please enter all the fields.'
                }
            });
        } else {
            this.setState({
                errorMsg: {
                    signin_error: ''
                }
            });
            // login successful
        }
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    render(){
        const { errorMsg } = this.state;
        return (
            <div className="login-page">
                <h1>Banking Application</h1>
                <div className="login-form">
                    <Form onSubmit={this.handleLogin}>
                        {errorMsg && errorMsg.signin_error && (
                            <p className="errorMsg centered-message">
                                {errorMsg.signin_error}
                            </p>
                        )}
                        <Form.Group controlId="email">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                onChange={this.handleInputChange}
                            />    
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}

const Login = () => {
    return <div>Login Page</div>;
};

export default Login;