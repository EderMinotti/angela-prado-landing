import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { Menu } from "./Menu";
import { useEffect, useState } from "react";
import { Path } from "../rotes/PathRotes";
import { Link } from "react-router-dom";

export const NavBar = () => {
const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

   
    handleResize();

   
    window.addEventListener("resize", handleResize);

  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [menu, setMenu] = useState(false);


  function handleMenu() {
    setMenu((prevState) => !prevState);
  }

  if (isDesktop) {
    return (
      <header className="sticky top-0 animate__animated animate__fadeInDown z-3">
        <nav className="bg-white">
          <ul className="grid grid-cols-[1fr_auto_1fr] items-center h-14 px-2">
            <li>
              <ul className="flex gap-5 cursor-pointer">
                <li className="justify-self-start text-lg text-(--cor-verde)"><Link to={Path.home}>Home</Link></li>
                <li className="justify-self-start text-lg text-(--cor-verde)"><Link to={Path.about}>Sobre-mim</Link></li>
                <li className="justify-self-start text-lg text-(--cor-verde)"><Link to={Path.contact}>Contato</Link></li>
              </ul>
            </li>
            <li className="col-start-2 justify-self-center">
              <img className="w-37.5 " src={logo} alt="" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 animate__animated animate__fadeInDown z-3">
      <nav className="bg-white">
        <ul className="grid grid-cols-[1fr_auto_1fr] items-center h-14 px-2">
          <li
            onClick={handleMenu}
            className="justify-self-start text-4xl text-(--cor-verde)"
          >
            <IoMenu />
          </li>
          <li className="col-start-2 justify-self-center">
            <img className="w-37.5 " src={logo} alt="" />
          </li>
        </ul>
      </nav>
      {menu && <Menu menuState={setMenu} />}
    </header>
  );
};
