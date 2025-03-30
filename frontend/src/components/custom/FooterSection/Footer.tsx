import '@/components/custom/FooterSection/Footer.css';


export function Footer() {
    return (
        <>
        <div className="footer-div">
            {/* Quick Links Section */}
            <div className="quick-links">
                <ul>
                    <li className='list-heading'>Quick Links</li>
                    <li className='list-item'>Home</li>
                    <li className='list-item'>Pricing</li>
                    <li className='list-item'>Courses</li>
                    <li className='list-item'>Recruiters</li>
                    <li className='list-item'>Certification</li>
                </ul>
            </div>

            {/* Contact Section */}
            <div className="contact-info">
                <ul>
                    <li className='list-heading'>Contact</li>
                    <li className='list-item'>Phone: +91 98765 43210</li>
                    <li className='list-item'>Email: info@example.com</li>
                    <li className='list-item'>Address: Bengaluru, India</li>
                </ul>
            </div>

            {/* Social Media Section */}
            <div className="social-media">
                <ul>
                    <li className='list-heading'>Follow Us</li>
                    <li className='list-item'>Facebook</li>
                    <li className='list-item'>Twitter</li>
                    <li className='list-item'>Instagram</li>
                    <li className='list-item'>LinkedIn</li>
                </ul>
            </div>

            {/* Other Information */}
            <div className="about-us">
                <ul>
                    <li className='list-heading'>About Us</li>
                    <li className='list-item'>Our Story</li>
                    <li className='list-item'>Careers</li>
                    <li className='list-item'>Privacy Policy</li>
                    <li className='list-item'>Terms of Service</li>
                </ul>
            </div>
        </div>
        </>
    );
        
        

}

export default Footer;