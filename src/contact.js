import { Link } from 'react-router-dom'; // Import the Link component

const Contact = () => {
    return (
        <div>
            <div className="section-title">Contact Us</div>
            <section className="contact">
                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-phone"></i>
                        <a href="tel:7666264345">766-626-4345</a>
                        <a href="tel:7304812998">730-481-2998</a>
                    </div>
                    <div className="box">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:monisha@gmail.com">monisha@gmail.com</a>
                        <a href="mailto:farhan@gmail.com">farhan@gmail.com</a>
                    </div>
                    <div className="box">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>G-12/104, Shree ganesh chs, Gharondha, sector-9, Ghansoli - 400701</p>
                    </div>
                </div>
                <form action="/" method="post">
                    <h3>Drop your Message</h3>
                    <div className="flex">
                        <div className="box">
                            <p>Name <span>*</span></p>
                            <input type="text" name="name" required maxLength="20" placeholder="Enter your name" className="input" />
                        </div>
                        <div className="box">
                            <p>Email <span>*</span></p>
                            <input type="email" name="email" required maxLength="20" placeholder="Enter your email" className="input" />
                        </div>
                        <div className="box">
                            <p>Number<span>*</span></p>
                            <input type="number" name="number" required min="0" max="99999999" maxLength="20" placeholder="Enter your Number" className="input" />
                        </div>
                        <div className="box">
                            <p>Role<span>*</span></p>
                            <select name="role" required className="input">
                                <option value="employee">Job Seeker (Employee)</option>
                                <option value="employer">Job Provider (Employer)</option>
                            </select>
                        </div>
                    </div>
                    <textarea name="message" className="input" required maxLength="1000" placeholder="Enter your message" cols="30" rows="10"></textarea>
                    <input type="submit" value="Send Message" name="send" className="btn" />
                </form>
            </section>
        </div>
    );
}

export default Contact;
