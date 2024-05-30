import { Link } from 'react-router-dom'; // Import the Link component

const Footer = () => {
    return (
        <footer class="footer">
            <section class="grid">
                <div class="box">
                    <h3>Quick Links</h3>
                    <a href="/"><i class="fas fa-angle-right"></i>Home</a>
                    <a href="/about"><i class="fas fa-angle-right"></i>About Us</a>
                    <a href="/jobs"><i class="fas fa-angle-right"></i>All Jobs</a>
                    <a href="/contact"><i class="fas fa-angle-right"></i>Contact Us</a>
                    <a href="#"><i class="fas fa-angle-right"></i>Filter Search</a>           
                </div>

                <div class="box">
                    <h3>Extra Links</h3>
                    <a href="#"><i class="fas fa-angle-right"></i>Account</a>
                    <a href="/login"><i class="fas fa-angle-right"></i>Login</a>
                    <a href="/register"><i class="fas fa-angle-right"></i>Register</a>
                    <a href="#"><i class="fas fa-angle-right"></i>Post Job</a>
                    <a href="#"><i class="fas fa-angle-right"></i>Dashboard</a>
                </div>

                <div class="box">
                    <h3>Follow Us</h3>
                    <a href="#"><i class="fab fa-facebook-f"></i>Facebook</a>
                    <a href="#"><i class="fab fa-twitter"></i>Twitter</a>
                    <a href="#"><i class="fab fa-instagram"></i>Instagram</a>
                    <a href="#"><i class="fab fa-linkedin"></i>Linkedin</a>
                    <a href="#"><i class="fab fa-youtube"></i>Youtube</a>
                </div>
            </section>

        <div class="credit">&copy; copyright @ 2023 by <span>Monisha and Farhan</span> | all rights reserved </div>
        </footer>
    )
}

export default Footer;