import Logo from "@/components/custom/HeaderSection/Logo";
import Navbar from "@/components/custom/HeaderSection/Navbar";
import MyButton from "@/components/custom/HeaderSection/LoginButton";
import '@/App.css';
import '@/components/custom/HeaderSection/Header.css';
export function Header()
{
    return(
        <>
        <div className="header">
        <Logo />
        <Navbar />
        <MyButton />
      </div>
        
        </>
    )
}

export default Header;