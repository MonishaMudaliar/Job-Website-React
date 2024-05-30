import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="account-form-container">
                <div className="account-form">
                    <form action="/" method="post">
                        <h3>Create an Account</h3>
                        <input type="text" required name="name" maxLength="20" placeholder="Enter your name" className="input" />
                        <input type="email" required name="email" maxLength="50" placeholder="Enter your email" className="input" />
                        <input type="password" required name="pass" maxLength="20" placeholder="Enter your password" className="input" />
                        <input type="password" required name="c_pass" maxLength="20" placeholder="Confirm your password" className="input" />
                        <p>Already have an account? <Link to="/login">Login Now</Link></p>
                        <input type="submit" value="Register Now" name="submit" className="btn" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
