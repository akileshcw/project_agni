import preview1 from '../../../assets/Agni-desktop.png';
import preview2 from '../../../assets/Agni-mobile.png';
export function Preview()
{
    return(
        <>
        <h1>Technology News & Job Listings Preview
        </h1>
        <div className='preview'>
        <img src={preview1}></img>
        <img src={preview2}></img>
        </div>
        
        </>
    )
}

export default Preview;