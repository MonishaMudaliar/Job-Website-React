import React from 'react';
import { Link } from 'react-router-dom';

const ViewJobs = () => {
    return (
        <div>
            <section className="job-details">
                <h1 className="heading">Job Details</h1>
                <div className="details">
                    <div className="job-info">
                        <h3>Senior Web Designer</h3>
                        <Link to="/ViewCompany">IT Infosys Co.</Link>
                        <p><i className="fas fa-map-marker-alt"></i>Mumbai, India</p>
                    </div>
                    <div className="basic-details">
                        <h3>Salary</h3>
                        <p>10000 - 25000 per month</p>
                        <h3>Benefits</h3>
                        <p>Work from home, health insurance</p>
                        <h3>Job Type</h3>
                        <p>Part-time</p>
                        <h3>Schedule</h3>
                        <p>Day Shift</p>
                    </div>
                    <ul>
                        <h3>Requirements</h3>
                        <li>Education: <span>Graduate</span></li>
                        <li>Age: <span>25+</span></li>
                        <li>Language: <span>Hindi, English</span></li>
                        <li>Experience: <span>3+ years</span></li>
                    </ul>
                    <ul>
                        <h3>Qualifications</h3>
                        <li>Bachelor's (Preferred)</li>
                        <li>PHP: 1 year (Preferred)</li>
                        <li>Web design: 1 year (Preferred)</li>
                        <li>WordPress: 1 year (Preferred)</li>
                        <li>Total work: 3 years (Required)</li>
                    </ul>
                    <ul>
                        <h3>Skills</h3>
                        <li>HTML5 and CSS3</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                        <li>PHP</li>
                        <li>Mysql</li>
                    </ul>
                    <div className="description">
                        <h3>Job description</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore at ratione necessitatibus a error tenetur doloribus nesciunt reprehenderit, aperiam recusandae rerum nisi est porro aliquid nulla saepe voluptatibus, voluptates officia? Unde inventore labore laudantium, eum deserunt dolorem eveniet obcaecati delectus fugit corporis dolor, laborum minima perferendis a provident eaque odit?</p>
                        <ul>
                            <li>Hiring 2 candidate for this role</li>
                            <li>Posted 2 days ago</li>
                        </ul>
                    </div>
                    <form action="/" method="post" className="flex-btn">
                        <input type="submit" value="Apply Now" name="Apply" className="btn" />
                        <button type="submit" className="save"><i className="far fa-heart"><span>Save Job</span></i></button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ViewJobs;
