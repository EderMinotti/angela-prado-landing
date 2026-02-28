import { Link } from "react-router-dom";
import { Path } from "../rotes/PathRotes";

export const Menu = ({menuState}) => {
    function handleClick() {
        menuState((prevState)=> !prevState)
    }

    
  return (
    <ul className="fixed w-full bg-white p-4 flex flex-col gap-3 z-3 animate__animated animate__fadeInDown">
      <li>
        <Link onClick={handleClick} to={Path.home}>Home</Link>
      </li>
      <li>
        <Link onClick={handleClick} to={Path.about}>Sobre-mim</Link>
      </li>
      <li>
        <Link onClick={handleClick} to={Path.contact}>Contato</Link>
      </li>
    </ul>
  );
};
