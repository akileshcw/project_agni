import "./Hero.css";
export function HeroSection() {
    return (
     <>
     <div className='hero-section'>
     <h1> Your Future with Tech</h1>
     <h2>Learn, Certify, and Get Hired</h2>
     <h4>Stay updated with the latest tech news, find job opportunities, 
      enhance your skills with top courses, and get certified to stand out.</h4>
      <div className="hero-buttons">
      <button className="Register-Student-primary">Join Now</button>
      <button className="Register-Recruiter-secondary">For Recruiters</button>
      </div>
     </div>
     
      
      </>
    );
  }
  
  export default HeroSection;