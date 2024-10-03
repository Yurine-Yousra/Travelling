import  { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import LoginImg from '../assets/besbes/6333040.jpg';
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
        
    });

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        
        try {
            const res = await fetch(`https://travelwebsiteserver.onrender.com/users/CreateUser`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials)
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            dispatch({ type: "REGISTER_SUCCESS" });
            navigate(`/login`);
            alert(result.message)
        } catch (err) {
            console.log(err);
            alert(err.message);
        }
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
                                <h2>Register</h2>
                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="text" placeholder='Username' required id="username" value={credentials.username} onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="email" placeholder='Email' required id="email" value={credentials.email} onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder='Password' required id="password" value={credentials.password} onChange={handleChange} />
                                    </FormGroup>
                                    <Button className='btn secondary__btn' type='submit'>Register</Button>
                                </Form>
                                <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;
