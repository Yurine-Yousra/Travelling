import  { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import LoginImg from '../assets/besbes/businessman-character-avatar-isolated.png';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log(credentials); // Example: Log credentials to console
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={LoginImg} alt="Login" />
                            </div>
                            <div className='login__form'>
                                <div className="user">
                                    <img src={LoginImg} alt="User" />
                                </div>
                                <h2>Login</h2>
                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="email" placeholder='Email' required id="email" value={credentials.email} onChange={handleChange} />
                                    </FormGroup>

                                    <FormGroup>
                                        <input type="password" placeholder='Password' required id="password" value={credentials.password} onChange={handleChange} />
                                    </FormGroup>

                                    <Button className='btn secondary__btn' id='coucou' type='submit'>Login</Button>
                                </Form>
                                <p>Do not have an account? <Link to='/register'>Create </Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;
