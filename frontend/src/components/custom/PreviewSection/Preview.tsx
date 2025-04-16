import preview1 from '../../../assets/Agni-desktop.png';
{/*import preview2 from '../../../assets/Agni-mobile.png';*/}
import './Preview.css';
export function Preview()
{
    return(
        <>
        <div className='preview-container'>
        <h1>Learn---Earn</h1>
        {/*<h1>Technology News & Job Listings Preview</h1>
        <div className='floating-msg-news'>
            <p>News Section</p>
        </div>
        <div className='floating-msg-job'>
            <p>Job Section</p>
        </div>
        <div className='floating-msg-course'>
            <p>Course Section</p>
        </div>
        <div className='floating-msg-suggestion'>
            <p>AI suggestions</p>
        </div>
        <div className='preview'>*/}
        
        <img  id="image1"src={preview1}></img>
        {/*<img id="image2" src={preview2}></img>
       
        </div>*/}
        
        </div>
        
        </>
    )
}

export default Preview;