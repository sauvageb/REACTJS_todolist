import React, {useState} from 'react';
import axios from 'axios';
import {Button, Form} from "react-bootstrap";

const Login = () => {
    const [validated, setValidated] = useState(false);

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });


    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (event) => {
        console.log('test')
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        try {
            const response = await axios.post('/api/auth/login', credentials);
            const {token} = response.data;
            // Store the tokens in localStorage or secure cookie for later use
            localStorage.setItem('token', token);

            // Redirect or perform other actions upon successful login
        } catch (error) {
            // Handle login error
        }
    };

    return (
        <div className="container m-5">
            <div className="d-flex justify-content-center">
                <div className="col-4">
                    <h2>Login</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                placeholder="Enter username"
                            />
                        </Form.Group>
                    </Form>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">Login</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
