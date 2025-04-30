import "./Testimonials.css";
{/*import recruiterImage from "@/assets/Testimonial-Recruiter.png";
import studentMale from "@/assets/Testimonial-Student-Male.png";*/}
import studentFemale from "@/assets/Testimonial-Student-Female.png";
import {Quote} from 'lucide-react';
import '@/App.css';

const Testimonials = () => {
    return (
        <div className="testimonial-section">
            <h1>Alumni & Recruiter Speak</h1>
                   <div className="card-container">
                   <div className="testimonial-card">
                            <div  className="icon-wrapper"><Quote size={56} style={{ fill:"var(--primary-color)"}} /></div>
                            <div className="feedback">
                                <h3>I found skilled candidates for my company through this EdTech platform. Their students are job-ready and up-to-date with the latest tech</h3>
                                <img className="testimonial-image"src={studentFemale} alt="Testimonial" />
                                <h4>Isac Newton, Senior Recruiter</h4>
                            </div>
                        </div>

                      <div className="testimonial-card">
                      <div  className="icon-wrapper"><Quote size={56} style={{ fill:"var(--primary-color)"}}  /></div>
                            
                            <div className="feedback">
                                <h3>This platform’s courses helped me land my first tech job. The content is current and industry-relevant.</h3>
                                <img className="testimonial-image" src={studentFemale} alt="Testimonial" />
                                <h4>Mala, Fresher</h4>
                            </div>
                      </div>

                      <div className="testimonial-card">
                        <div  className="icon-wrapper"><Quote size={56} style={{ fill:"var(--primary-color)"}} /></div>
                            
                            <div className="feedback">
                                <h3>I secured a job after completing their certification. The live updates and hands-on projects made all the difference.</h3>
                            </div>
                            <img className="testimonial-image" src={studentFemale} alt="Testimonial" />
                                <h4>Harry, Graduate</h4>
                        </div>
        
                   </div>

                      
        </div>
          );
     };

export default Testimonials;
