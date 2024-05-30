import React from 'react';
import { Link } from 'react-router-dom';

const ViewCompany = () => {
    return (
        <div>
            <section className="view-company">
                <h1 className="heading">Company details</h1>
                <div className="details">
                    <div className="info">
                        <img src="./images/icon-1.png" alt="" />
                        <h3>IT Infosys Co.</h3>
                        <p><i className="fas fa-map-marker-alt"></i>Mumbai, India</p>
                    </div>
                    <div className="description">
                        <h3>About Company</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate magnam provident, totam, modi deserunt laborum exercitationem veniam, laboriosam ut distinctio impedit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum suscipit quam rerum accusantium perspiciatis sequi harum ipsa nesciunt velit.</p>
                    </div>
                    <ul>
                        <li>3 Jobs Posted</li>
                        <li>Established at 21-05-2004</li>
                        <li>253 working employees</li>
                    </ul>
                </div>
            </section>
            
            {/* Jobs Section */}
            <section className="jobs-container">
                <h1 className="heading">Jobs They Offer</h1>
                <div className="box-container">
                    <div className="box">
                        <div className="company">
                            <img src="./images/icon-1.png" alt="" />
                            <div>
                                <h3>It Infosys co.</h3>
                                <p>2 days ago</p>
                            </div>
                        </div>
                        <h3 className="job-title">Senior Web Developer</h3>
                        <p className="location"><i className="fas fa-map-marker-alt"></i>
                            <span>Mumbai, India</span></p>
                        <div className="tags">n
                            <p><i className="fas fa-indian-rupee-sign"></i><span>10k-25k</span></p>
                            <p><i className="fas fa-briefcase"></i><span>Part-time</span></p>
                            <p><i className="fas fa-clock"></i><span>Day shift</span></p>
                        </div>
                        <div className="flex-btn">
                            <a href="view_job.html" className="btn">View Details</a>
                            <button type="submit" className="far fa-heart"></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewCompany;
