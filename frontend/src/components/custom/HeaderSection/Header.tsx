import Logo from "@/components/custom/HeaderSection/Logo";
import Navbar from "@/components/custom/HeaderSection/Navbar";
import MyButton from "@/components/custom/HeaderSection/LoginButton";
import '@/App.css';
import '@/components/custom/HeaderSection/Header.css';
import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth();
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <Logo />
        </div>

        {width < 992 && !isOpen && (
          <span className="material-symbols-outlined" onClick={toggleSidebar}>
            menu
          </span>
        )}

        {width >= 992 && (
          <>
            <div className="nav-container">
              <Navbar />
            </div>
            <div className="button-container">
              <MyButton />
            </div>
          </>
        )}
      </div>

      {width < 992 && (
        <div className={`side-bar ${isOpen ? 'active' : ''}`}>
          <span className="material-symbols-outlined close-icon" onClick={toggleSidebar}>
            close
          </span>
          <Navbar />
          <MyButton />
        </div>
      )}
    </>
  );
};

export default Header;
