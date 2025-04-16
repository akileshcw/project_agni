import "./Hero.css";
import AI from "@/assets/Hero-AI.png";
import Cyber from "@/assets/Hero-Cyber.png";
import Cloud from "@/assets/Hero-Cloud.png";
export function HeroSection() {
    return (
     <>
     <div className='hero-section'>
     <div className="ilustrations-left">
     <img src={AI} className="ai"alt="image of an AI bot"></img>
      <img src={Cyber}className="cyber" alt="image of an AI bot"></img>
      <img src={Cloud} className="cloud" alt="image of an AI bot"></img>
      </div>
     <h1> Your Future with Tech</h1>
     <h2>Learn, Certify, Get Hired</h2>
     <h3>Tech news, jobs, skills, and certifications — all in one place.</h3>
      <div className="hero-buttons">
      <button className="Register-Student-primary">Join Now</button>
      <button className="Register-Recruiter-secondary">For Recruiters</button>
      </div>
      <div className="ilustrations">
      <img src={AI} className="ai"alt="image of an AI bot"></img>
      <img src={Cyber}className="cyber" alt="image of an AI bot"></img>
      <img src={Cloud} className="cloud" alt="image of an AI bot"></img>
      </div>
      
     </div>
     
      
      </>
    );
  }
  
  export default HeroSection;