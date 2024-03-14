import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './loginvalidation'
import car22 from '../../assets/car22.png';
import '../../App.css'



function Login() {
    const [values,setValues] = useState({
        email:'',
        password: ''
    })
    const [admin] = useState({
        email: 'admin@example.com',
        password: 'password123'
      });
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));

    }        
    const handleSubmit =(event) => {
        event.preventDefault();
        if (values.email === admin.email && values.password === admin.password) {
            // Redirect to the dashboard
            window.location.href = '/dashboard';
          } else {
            setErrors(Validation(values));
          }
    }

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ backgroundImage: `url(${car22})`, backgroundSize: 'cover', flex: '0 0 100%', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='card' style={{ width: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', background:'gray', backdropFilter:'blur(80px)', padding: '2rem' }}>
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize:'30px', fontFamily:'sans-serif' }}>Sign-In</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" placeholder="Enter Email" name='email'
                                onChange={handleInput} style={{ width: '100%', borderRadius: '5px', padding: '10px', border: '1px solid #ccc' }} />
                            {errors.email && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.5rem', display: 'block' }}>{errors.email}</span>}
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" placeholder="Enter Password" name='password'
                                onChange={handleInput} style={{ width: '100%', borderRadius: '5px', padding: '10px', border: '1px solid #ccc' }} />
                            {errors.password && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.5rem', display: 'block' }}>{errors.password}</span>}
                        </div>
                       
                        <Link to="/dash" className='btn btn-light w-100 rounded-0' style={{  marginBottom: '5px', width: '100%', fontSize: '14px', backgroundColor:'green' }}>Login</Link>

                    </form>
                    <Link to="/signup" className='btn btn-light w-100 rounded-0' style={{ textDecoration: 'none', backgroundColor:'black' }}>Sign Up</Link>

                </div>
            </div>
        </div>
    );
}

export default Login;