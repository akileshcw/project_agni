
import {useState} from 'react';
import './Login.css'
function SignUp()
{  const [loginHere,setLoginForm]=useState(false);
    return(
        <>
        {(loginHere?console.log("loginHere state:", loginHere):
        
        (
            <div className="signup-section">
        <span className="material-symbols-outlined">
            close
            </span>
        <div className='animation-section'>
            <h1 className='heading'>
                <div>A Place to Upskill</div>
                <div>&</div>
                <div> A Hub for Recruiters</div>
             
           
            </h1>
            <div className='top-square'>Job Search ?</div>
            <div className='mid-logo'>Agni</div>
            <div className='bottom-square'>Skill Search ?</div>
            <div className='circle-bg'></div>
        </div>
        <div className='content-section'>
            <form>
                <div className="input-mail-id">
                <label>E-mail</label>
            <br/>
            <input type="email" required placeholder='alice@gmail.com '/>
                </div>
            <br/>
            <div className="input-password-id">
            <label>Password</label>
            <br/>
            <input type="password" required placeholder='at least 8 charachters'/><br />
            </div>
            <br />
            <div className="input-login-option">
            <button className='login-button'>Join Agni</button>
            <div>or</div>
             <div className='google-sso'>
             <i className="fab fa-google"></i><p> Sign up with Google</p>
             </div>
             <div className='microsoft-sso'>
             <i className="fab fa-microsoft"></i> <p> Sign up with Microsoft</p>
             </div>
            <div className='passkey'>
            <i className="fas fa-key"></i><p> Sign up with a Passkey</p>
            </div>
            <p>Already a member? <a href=""className='login-link' onClick={()=>setLoginForm(true)}>login here</a></p>
            </div>
            </form>
        </div>    
        </div>
        ))}
        
        
        </>
    )
}

export default SignUp;