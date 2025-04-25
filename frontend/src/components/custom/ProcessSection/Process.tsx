import learnerpic1 from '@/assets/Process_informed-removebg-preview.png';
import learnerpic2 from '@/assets/Process_upskill-removebg-preview.png';
import learnerpic3 from '@/assets/Process_certify-removebg-preview.png'
import hrpic1 from'@/assets/Process_connect.png';
import hrpic2 from '@/assets/Process_interview.png';
//import learnerpic2 from '@/assets/LearnerSection-Coder.jpeg';
import './Process.css';

export function Process() {
    return (
        <div className='process'>
            <h1>Look How it Works</h1>
            <div className='learners-section'>
            <h2>For the Learners</h2>
                <div className='learners-container'>
                
                    <div className='pic1'>
                        <h3>Stay Informed</h3>
                        <div className="description">
                           <img src={learnerpic1} alt="stay updated"></img>
                        </div>
                    </div>
                    <div className='pic2'>
                        
                        <h3>Upskill Yourself</h3>
                        <div className="description">
                        <img src={learnerpic2} alt="upskill"></img>
                            </div>
                        </div>
                        <div className='pic3'>
                        
                        <h3>Get Certified</h3>
                        <div className="description">
                        <img src={learnerpic3} alt="certification"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='learners-section'>
            <h2>For the Recruiters</h2>
                <div className='recruiters-container'>
                
                    <div className='pic1'>
                        <h3>Connect Easily</h3>
                        <div className="description">
                            <img src={hrpic1} alt="people connecting" />
                        </div>
                    </div>
                    <div className='pic2'>
                        
                        <h3>Discover Talent</h3>
                        <div className="description">
                            <img src={hrpic2} alt="Find the right talent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Process;
