import recruiterImage from '../../../assets/Testimonial-Recruiter.png';
import studentMale from '../../../assets/Testimonial-Student-Male.png';
import studentFemale from '../../../assets/Testimonial-Student-Female.png';
import './Testimonials.css';
export function Testimonials()
   {
    return(
        <>
        <div className='testimonial-section'>
        <h1>Testimonials & Success Stories</h1>
        <div className='testimonial-container'>
        
        <div className='testimonial-corousal'>
         
        <div className="testimonial-card">
       <img src={recruiterImage} alt="Testimonial Image"/>
      <div className='feedback'>
         <p>"The hiring landscape is evolving, and we need professionals who are equipped with the latest skills. 
            The EdTech program consistently delivers job-ready candidates who excel in both technical and 
            problem-solving skills. Our company has hired multiple graduates 
            from this platform, and they have proven to be valuable assets!"</p>
         <h4>Isac Newton, Senior Recruiter</h4>
       </div>
     </div>

     <div className="testimonial-card">
       <img src={studentFemale} alt="Testimonial Image"/>
      <div className='feedback'>
         <p>"As someone transitioning into tech, I needed a course that provided both knowledge and credibility.
             The EdTech program not only enhanced my technical skills but also gave me access to hiring opportunities 
             through their job placement assistance.I secured my dream job within a month of completing the certification!"</p>
         <h4>Mala,Fresher</h4>
       </div>
     </div>

     <div className="testimonial-card">
       <img src={studentMale} alt="Testimonial Image"/>
      <div className='feedback'>
         <p>"The hiring landscape is evolving, and we need professionals who are equipped with the latest skills. 
            The EdTech program consistently delivers job-ready candidates who excel in both technical and problem-solving skills. Our company has hired multiple graduates 
            from this platform, and they have proven to be valuable assets!"</p>
         <h4>Harry, Graduate</h4>
       </div>
     </div>
     <div className="testimonial-card">
       <img src={recruiterImage} alt="Testimonial Image"/>
      <div className='feedback'>
         <p>"The hiring landscape is evolving, and we need professionals who are equipped with the latest skills. 
            The EdTech program consistently delivers job-ready candidates who excel in both technical and 
            problem-solving skills. Our company has hired multiple graduates 
            from this platform, and they have proven to be valuable assets!"</p>
         <h4>Isac Newton, Senior Recruiter</h4>
       </div>
     </div>

     <div className="testimonial-card">
       <img src={studentFemale} alt="Testimonial Image"/>
      <div className='feedback'>
         <p>"As someone transitioning into tech, I needed a course that provided both knowledge and credibility.
             The EdTech program not only enhanced my technical skills but also gave me access to hiring opportunities 
             through their job placement assistance.I secured my dream job within a month of completing the certification!"</p>
         <h4>Isac Newton, Senior Recruiter</h4>
       </div>
     </div>

     <div className="testimonial-card">
       <img src={studentMale} alt="Testimonial Image"/>
      <div className='feedback'>
         <p>"The hiring landscape is evolving, and we need professionals who are equipped with the latest skills. 
            The EdTech program consistently delivers job-ready candidates who excel in both technical and problem-solving skills. Our company has hired multiple graduates 
            from this platform, and they have proven to be valuable assets!"</p>
         <h4>Isac Newton, Senior Recruiter</h4>
       </div>
     </div>
        </div>
        </div>
        </div>
        
        </>
    )
   } 
   

export default Testimonials;