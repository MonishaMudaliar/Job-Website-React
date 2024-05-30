import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="section-title">About Us</div>
            <section className="about">
                <img src="./images/about-us.png" alt="" />
                <div className="box">
                    <h3>Why Choose Us?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, mollitia consectetur vero magnam aspernatur a vel suscipit aut laborum aliquid deleniti illo voluptate quis fugit officiis voluptas facere, accusamus repellendus tempora sed corrupti architecto? Vel quidem, quos aperiam provident illo placeat distinctio amet repudiandae, repellendus, error dignissimos delectus beatae saepe.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta et delectus non exercitationem, cum aspernatur quasi ab culpa? Quia aliquid temporibus vel aut?</p>
                    <Link to="/contact" className="btn">Contact Us</Link>
                </div>
            </section>
        </div>
    );
};

export default About;
