import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = () => {
    return (
        <div>
            <section className="job-filter">
                <h1 className="heading">Filter Jobs</h1>
                <form action="/" method="post">
                    <div className="flex">
                        <div className="box">
                            <p>Job title <span>*</span></p>
                            <input type="text" name="title" placeholder="keyword, category, or company" required maxLength="20" className="input" />
                        </div>
                        <div className="box">
                            <p>Job Location <span>*</span></p>
                            <input type="text" name="location" placeholder="city, state, or country" required maxLength="50" className="input" />
                        </div>
                    </div>
                    <div class="dropdown-container">
                <div class="dropdown">
                    <input type="text" readonly placeholder="date posted" name="date" maxlength="20" class="output" />
                    <div class="lists">
                        <p class="items">Today</p>
                        <p class="items">3 days ago</p>
                        <p class="items">7 days ago</p>
                        <p class="items">10 days ago</p>
                        <p class="items">15 days ago</p>
                        <p class="items">30 days ago</p>
                    </div>
                </div>
                <div class="dropdown">
                    <input type="text" readonly placeholder="estimated salary" name="date" maxlength="20" class="output" />
                    <div class="lists">
                        <p class="items">1k or less</p>
                        <p class="items">1k - 5k</p>
                        <p class="items">5k - 10k</p>
                        <p class="items">10k - 20k</p>
                        <p class="items">20k - 30k</p>
                        <p class="items">30k - 40k</p>
                        <p class="items">40k - 50k</p>
                        <p class="items">50k - 1 lakh</p>
                        <p class="items">1 lakh - 5 lakh</p>
                        <p class="items">5 lakh - 10 lakh</p>
                        <p class="items">10 lakh - 20 lakh</p>
                        <p class="items">20 lakh - 50 lakh</p>
                        <p class="items">50 lakh - 1 crore</p>
                        <p class="items">1 crore - 5 crore</p>
                        <p class="items">5 crore - 10 crore</p>
                        <p class="items">10 crore or more</p>
                    </div>
                </div>
                <div class="dropdown">
                    <input type="text" readonly placeholder="job type" name="date" maxlength="20" class="output" />
                    <div class="lists">
                        <p class="items">Full-time</p>
                        <p class="items">Part-time</p>
                        <p class="items">Internship</p>
                        <p class="items">Contract</p>
                        <p class="items">Temporary</p>
                        <p class="items">Fresher</p>
                    </div>
                </div>
                <div class="dropdown">
                    <input type="text" readonly placeholder="education level" name="date" maxlength="20" class="output" />
                    <div class="lists">
                        <p class="items">10th pass</p>
                        <p class="items">12th pass</p>
                        <p class="items">Bachelor's degree</p>
                        <p class="items">Master's degree</p>
                        <p class="items">Diploma</p>
                    </div>
                </div>
                <div class="dropdown">
                    <input type="text" readonly placeholder="work shifts" name="date" maxlength="20" class="output" />
                    <div class="lists">
                        <p class="items">Day Shift</p>
                        <p class="items">Night Shift</p>
                        <p class="items">Flexible Shift</p>
                    </div>
                </div>
            </div>
                </form>
            </section>

            <section className="jobs-container">
                <h1 className="heading">All Jobs</h1>
                <div class="box-container">
                    <div class="box">
                        <div class="company">
                            <img src="images/icon-1.png" alt="" />
                            <br/>
                            <br/>
                            <div>
                                <h3>It Infosys co.</h3>
                                <p>2 days ago</p>
                            </div>
                        </div>
                        <h3 class="job-title">Senior Web Developer</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i>
                        <span>Mumbai, India</span></p>
                        <div class="tags">
                            <p><i class="fas fa-indian-rupee-sign"></i><span>10k-25k</span></p>
                            <p><i class="fas fa-briefcase"></i><span>Part-time</span></p>
                            <p><i class="fas fa-clock"></i><span>Day shift</span></p>
                        </div>
                        <div class="flex-btn">
                            <Link to="/ViewCompany" class="btn">View Details</Link>
                            <button type="submit" class="far fa-heart"></button>
                        </div>
                        <br/>
                    </div>
                    <div class="box">
                        <div class="company">
                            <img src="./images/icon-2.jpeg" alt="" />
                            <div>
                                <h3>Oll Media ltd</h3>
                                <p>2 days ago</p>
                            </div>
                        </div>
                        <h3 class="job-title">Qualified developer</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i>
                        <span>Mumbai, India</span></p>
                        <div class="tags">
                            <p><i class="fas fa-indian-rupee-sign"></i><span>9000</span></p>
                            <p><i class="fas fa-briefcase"></i><span>Full-time</span></p>
                            <p><i class="fas fa-clock"></i><span>Flexible shift</span></p>
                        </div>
                        <div class="flex-btn">
                            <Link to="/ViewCompany" class="btn">View Details</Link>
                            <button type="submit" class="far fa-heart"></button>
                        </div>
                    </div>
                    <div class="box">
                        <div class="company">
                            <img src="./images/icon-3.png" alt="" />
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div>
                                <h3>Software Solutions</h3>
                                <p>Posted today</p>
                            </div>               
                        </div>
                        <h3 class="job-title">Javascript Developer</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i>
                        <span>Mumbai, India</span></p>
                        <div class="tags">
                            <p><i class="fas fa-indian-rupee-sign"></i><span>10k-25k</span></p>
                            <p><i class="fas fa-briefcase"></i><span>Internship</span></p>
                            <p><i class="fas fa-clock"></i><span>Night shift</span></p>
                        </div>
                        <div class="flex-btn">
                            <Link to="/ViewCompany" class="btn">View Details</Link>
                            <button type="submit" class="far fa-heart"></button>
                        </div>
                    </div>
                    <div class="box">
                        <div class="company">
                            <img src="images/icon-4.png" alt="" />
                            <div>
                                <h3>It World</h3>
                                <p>19 days ago</p>
                            </div>
                        </div>
                        <h3 class="job-title">Junior Front-end Developer</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i>
                        <span>Mumbai, India</span></p>
                        <div class="tags">
                            <p><i class="fas fa-indian-rupee-sign"></i><span>20k-55k</span></p>
                            <p><i class="fas fa-briefcase"></i><span>Contract</span></p>
                            <p><i class="fas fa-clock"></i><span>Fixed shift</span></p>
                        </div>
                        <div class="flex-btn">
                            <Link to="/ViewCompany" class="btn">View Details</Link>
                            <button type="submit" class="far fa-heart"></button>
                        </div>
                    </div>
                    <div class="box">
                        <div class="company">
                            <img src="images/icon-5.png" alt="" />
                            <div>
                                <h3>Info Statics</h3>
                                <p>2 days ago</p>
                            </div>
                        </div>
                        <h3 class="job-title">Junior Assistant</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i>
                        <span>Mumbai, India</span></p>
                        <div class="tags">
                            <p><i class="fas fa-indian-rupee-sign"></i><span>5000</span></p>
                            <p><i class="fas fa-briefcase"></i><span>Temporary</span></p>
                            <p><i class="fas fa-clock"></i><span>Flexible Shifts</span></p>
                        </div>
                        <div class="flex-btn">
                            <Link to="/ViewCompany" class="btn">View Details</Link>
                            <button type="submit" class="far fa-heart"></button>
                        </div>
                    </div>
                    
                    <div class="box">
                        <div class="company">
                            <img src="images/icon-6.png" alt="" />
                            <div>
                                <h3>Mass Idea</h3>
                                <p>2 days ago</p>
                            </div>
                        </div>
                        <h3 class="job-title">PHP Developer</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i>
                        <span>Mumbai, India</span></p>
                        <div class="tags">
                            <p><i class="fas fa-indian-rupee-sign"></i><span>30k-1 Lakh</span></p>
                            <p><i class="fas fa-briefcase"></i><span>Part-time</span></p>
                            <p><i class="fas fa-clock"></i><span>Day shift</span></p>
                        </div>
                        <div class="flex-btn">
                            <Link to="/ViewCompany" class="btn">View Details</Link>
                            <button type="submit" class="far fa-heart"></button>
                        </div>
                    </div>
                    <div class="box">
                        <div class="company">
                            <img src="images/icon-7.png" alt="" />
                            <div>
                                <h3>It Infosys co.</h3>
                                <p>2 days ago</p>
                            </div>
                        </div>
                        <h3 class="job-title">Junior Assistant</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i>
                        <span>Mumbai, India</span></p>
                        <div class="tags">
                            <p><i class="fas fa-indian-rupee-sign"></i><span>5000</span></p>
                            <p><i class="fas fa-briefcase"></i><span>Temporary</span></p>
                            <p><i class="fas fa-clock"></i><span>Flexible shifts</span></p>
                        </div>
                        <div class="flex-btn">
                            <Link to="/ViewCompany" class="btn">View Details</Link>
                            <button type="submit" class="far fa-heart"></button>
                        </div>
                    </div>
                    <div class="box">
                        <div class="company">
                            <img src="images/icon-8.png" alt="" />
                            <div>
                                <h3>It Infosys co.</h3>
                                <p>2 days ago</p>
                            </div>
                        </div>
                        <h3 class="job-title">JavaScript Developer</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i>
                        <span>Mumbai, India</span></p>
                        <div class="tags">
                            <p><i class="fas fa-indian-rupee-sign"></i><span>10k-25k</span></p>
                            <p><i class="fas fa-briefcase"></i><span>Part-time</span></p>
                            <p><i class="fas fa-clock"></i><span>Night shift</span></p>
                        </div>
                        <div class="flex-btn">
                            <Link to="/ViewCompany" class="btn">View Details</Link>
                            <button type="submit" class="far fa-heart"></button>
                        </div>
                    </div>
                    <div class="box">
                        <div class="company">
                            <img src="images/icon-8.png" alt="" />
                            <div>
                                <h3>It Infosys co.</h3>
                                <p>2 days ago</p>
                            </div>
                        </div>
                        <h3 class="job-title">Senior Web Developer</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i>
                        <span>Mumbai, India</span></p>
                        <div class="tags">
                            <p><i class="fas fa-indian-rupee-sign"></i><span>10k-25k</span></p>
                            <p><i class="fas fa-briefcase"></i><span>Part-time</span></p>
                            <p><i class="fas fa-clock"></i><span>Day shift</span></p>
                        </div>
                        <div class="flex-btn">
                            <Link to="/ViewCompany" class="btn">View Details</Link>
                            <button type="submit" class="far fa-heart"></button>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Jobs;
