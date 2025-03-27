import Logo from "./components/custom/HeaderSection/Logo";
import Navbar from "./components/custom/HeaderSection/Navbar";
import MyButton from "./components/custom/HeaderSection/LoginButton";
import HeroSection from "./components/custom/HeroSection/Hero";



function App() {
  return (
   <>
   <div className="page">
   <div className='header'>
    <Logo/>
    <Navbar/>
    <MyButton/>
   </div>
   <br></br>
   <div className='hero-section'>
    <HeroSection/>
    </div>
   </div>
   
    </>
  );
}

export default App;
