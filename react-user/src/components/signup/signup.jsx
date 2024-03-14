import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './signupvalidation';
import car22 from '../../assets/car22.png';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            backgroundImage: `url(${car22})`, // Apply the background image
            backgroundSize: 'cover', // Ensure the background image covers the entire container
            backgroundPosition: 'center', // Center the background image
        }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', width: '25%' }}>
                <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '24px' }}>Sign-Up</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            name='name'
                            onChange={handleInput} 
                            style={{ width: '100%', borderRadius: '5px', padding: '10px' }}
                        />
                        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            name='email'
                            onChange={handleInput} 
                            style={{ width: '100%', borderRadius: '5px', padding: '10px' }}
                        />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name='password'
                            onChange={handleInput} 
                            style={{ width: '100%', borderRadius: '5px', padding: '10px' }}
                        />
                        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                    </div>
                    <button 
                        type='submit' 
                        style={{ 
                            width: '100%', 
                            borderRadius: '0', 
                            backgroundColor: 'black', 
                            color: 'white', 
                            padding: '10px',
                            marginBottom: '0.5rem'
                        }}
                    >
                        Signup
                    </button>
                    <p style={{ marginBottom: '1rem', textAlign: 'center', fontSize: '14px' }}>
                        You are agreeing to our terms and policies
                    </p>
                    <Link 
                        to="/Login" 
                        style={{ 
                            width: '100%', 
                            borderRadius: '0', 
                            backgroundColor: 'lightgray', 
                            padding: '10px', 
                            textDecoration: 'none',
                            display: 'block',
                            textAlign: 'center',
                            fontSize: '14px'
                        }}
                    >
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;