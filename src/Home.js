import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; // Import the Link component

const Main = () => {
    return (
        <div>

            <div className="section-title">About Us</div>
            <section className="about">
                <img src="./images/about-us.png" alt="" width={1000}/>
                <div className="box">
                    <h3>Why Choose us?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, mollitia consectetur vero magnam aspernatur a vel suscipit aut laborum aliquid deleniti illo voluptate quis fugit officiis voluptas facere, accusamus repellendus tempora sed corrupti architecto? Vel quidem, quos aperiam provident illo placeat distinctio amet repudiandae, repellendus, error dignissimos delectus beatae saepe.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta et delectus non exercitationem, cum aspernatur quasi ab culpa? Quia aliquid temporibus vel aut?</p>
                    <Link to="/contact" className="btn">Contact Us</Link>
                </div>
            </section>
            
            {/* about us section ends */}

            {/* review section starts */}
            <div className="section-title">Top Reviews</div>
            <section className="reviews">
            <div className="box-container">
            <div className="box">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3 className="title">Amazing Results</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda veniam? Temporibus repudiandae nihil expedita consectetur unde iusto obcaecati placeat ipsam soluta.</p>
                <div className="user">
                    <img src="./images/pic-1.jpg" alt="" />
                    <div>
                    <h3>John Deo</h3>
                    <span>Web Designer</span>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3 className="title">Easy to Use</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda veniam? Temporibus repudiandae nihil expedita consectetur unde iusto obcaecati placeat ipsam soluta.</p>
                <div className="user">
                    <img src="./images/pic-2.jpg" alt="" />
                    <div>
                    <h3>John Deo</h3>
                    <span>Web Designer</span>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3 className="title">Got Selected</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda veniam? Temporibus repudiandae nihil expedita consectetur unde iusto obcaecati placeat ipsam soluta.</p>
                <div className="user">
                    <img src="./images/pic-3.jpg" alt="" />
                    <div>
                    <h3>John Deo</h3>
                    <span>Web Designer</span>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3 className="title">Nice Experience</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda veniam? Temporibus repudiandae nihil expedita consectetur unde iusto obcaecati placeat ipsam soluta.</p>
                <div className="user">
                    <img src="./images/pic-4.jpg" alt="" />
                    <div>
                    <h3>John Deo</h3>
                    <span>Web Designer</span>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3 className="title">Wide Range</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda veniam? Temporibus repudiandae nihil expedita consectetur unde iusto obcaecati placeat ipsam soluta.</p>
                <div className="user">
                    <img src="./images/pic-5.jpg" alt="" />
                    <div>
                    <h3>John Deo</h3>
                    <span>Web Designer</span>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3 className="title">Super Results</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda veniam? Temporibus repudiandae nihil expedita consectetur unde iusto obcaecati placeat ipsam soluta.</p>
                <div className="user">
                    <img src="./images/pic-6.jpg" alt="" />
                    <div>
                    <h3>John Deo</h3>
                    <span>Web Designer</span>
                    </div>
                </div>
            </div>
        </div>
            </section>
            {/* review section ends */}

            {/* home section starts */}
            <div className="home-container">
                <section className="home">
                    <form action="/" method="post">
                        <h3>Find your next Job</h3>

                        <p>Job title <span>*</span></p>
                        <input type="text" name="title" placeholder="keyword, category or company" required maxLength="20" className="input" />

                        <p>Job Location <span>*</span></p>
                        <input type="text" name="location" placeholder="city, state or country" required maxLength="50" className="input" />
                        <input type="submit" value="Search Job" className="btn" />
                    </form>
                </section>
            </div>
            {/* home section ends */}

            {/* category section starts */}
            <section class="category">
                <h1 class="heading">Job Categories</h1>
                <div class="box-container">
                    <a href="#" class="box">
                        <i class="fas fa-code"></i>
                        <div>
                            <h3>Development</h3>
                            <span>2200 jobs</span>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <i class="fas fa-pen"></i>
                        <div>
                            <h3>Designer</h3>
                            <span>500 jobs</span>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <i class="fas fa-chalkboard-user"></i>
                        <div>
                            <h3>Teacher</h3>
                            <span>1500 jobs</span>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <i class="fas fa-bullhorn"></i>
                        <div>
                            <h3>Marketing</h3>
                            <span>1200 jobs</span>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <i class="fas fa-headset"></i>
                        <div>
                            <h3>Service</h3>
                            <span>3100 jobs</span>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <i class="fas fa-wrench"></i>
                        <div>
                            <h3>Engineer</h3>
                            <span>400 jobs</span>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <i class="fas fa-hand-holding-dollar"></i>
                        <div>
                            <h3>Finance</h3>
                            <span>1000 jobs</span>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <i class="fas fa-digging"></i>
                        <div>
                            <h3>Labour</h3>
                            <span>4000 jobs</span>
                        </div>
                    </a>
                </div>
            </section>
            {/* category section ends */}

            {/* jobs section starts */}
            <section className="jobs-container">
            <h1 className="heading">Latest Jobs</h1>
            <div class="box-container">
                <div class="box">
                    <div class="company">
                        <img src="./images/icon-1.png" alt="" />
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
                        <Link to="/ViewJobs" class="btn">View Details</Link>
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
                        <Link to="/ViewJobs" class="btn">View Details</Link>
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
                        <Link to="/ViewJobs" class="btn">View Details</Link>
                        <button type="submit" class="far fa-heart"></button>
                    </div>
                </div>
                <div class="box">
                    <div class="company">
                        <img src="./images/icon-4.png" alt="" />
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
                        <Link to="/ViewJobs" class="btn">View Details</Link>
                        <button type="submit" class="far fa-heart"></button>
                    </div>
                </div>
                <div class="box">
                    <div class="company">
                        <img src="./images/icon-5.png" alt="" />
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
                        <Link to="/ViewJobs" class="btn">View Details</Link>
                        <button type="submit" class="far fa-heart"></button>
                    </div>
                </div>
                
                <div class="box">
                    <div class="company">
                        <img src="./images/icon-6.png" alt="" />
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
                        <Link to="/ViewJobs" class="btn">View Details</Link>
                        <button type="submit" class="far fa-heart"></button>
                    </div>
                </div>
                <div class="box">
                    <div class="company">
                        <img src="./images/icon-7.png" alt="" />
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
                        <Link to="/ViewJobs" class="btn">View Details</Link>
                        <button type="submit" class="far fa-heart"></button>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link to="/ViewCompany" className="btn">View All</Link>
            </div>
        </section>
            {/* jobs section ends */}
        </div>
    );
}

export default Main;
