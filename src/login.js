import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="account-form-container">
                <div className="account-form">
                    <form action="/" method="post">
                        <h3>Welcome Back!</h3>
                        <input type="email" required name="email" maxLength="50" placeholder="Enter your email" className="input" />
                        <input type="password" required name="pass" maxLength="20" placeholder="Enter your password" className="input" />
                        <p>Don't have an account? <Link to="/register">Register Now</Link></p>
                        <input type="submit" value="login now" name="submit" className="btn" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
