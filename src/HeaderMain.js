import './style.css';
import { Link } from 'react-router-dom'; // Import the Link component

const Header = () => {
    return(
    <header className="header">
    <section className="flex">
        <div id="menu-btn" className="fas fa-bars-staggered"></div>
        <Link to="home.html" className="logo"><i className="fas fa-briefcase"></i>Job Portal</Link>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/jobs">All Jobs</Link>
            <Link to="/contact">Contact Us</Link>
            {/* <Link to="/login">Account</Link> */}
        </nav>

        <Link to="" className="btn" style={{ marginTop: '0' }}>Post Job</Link>
        <Link to="/App1" className="btn" style={{ marginTop: '0' }}>CV Builder</Link>
        <Link to="/login" className="btn" style={{ marginTop: '0' }}>Sign In</Link>
    </section>
    </header>
    )
    }

export default Header;