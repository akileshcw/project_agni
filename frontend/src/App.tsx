export function Mybutton(){
  console.log('ready to log in');
  return(
<>
<button id='register-btn'>Login / Register</button>
</>
  );
}


function App() {
  return (
   <>
   <div id='header'>
    <div>LOGO</div>
    <div className='Nav-list'>Home</div>
    <div className='Nav-list'>Students</div>
    <div className='Nav-list'>Recruiters</div>
    <Mybutton/>
   </div>
    </>
  );
}

export default App;
