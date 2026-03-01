import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const SocialLinks = () => {
  return (
    <>
      <Link
        to={
          "https://wa.me/5516993174694?text=Olá eu gostaria de agendar um horário"
        }
        className="text-6xl fixed bottom-3 right-3 text-[#32D851] z-3 animate__animated animate__heartBeat"
      >
        <IoLogoWhatsapp />
      </Link>
      <Link
        to={"https://www.instagram.com/angela_prado_podologa_/"}
        className="text-6xl fixed bottom-20 right-3 text-black z-3 animate__animated animate__heartBeat"
      >
        <RiInstagramFill />
      </Link>
    </>
  );
};
