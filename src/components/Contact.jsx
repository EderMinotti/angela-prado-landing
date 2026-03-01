import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";


export const Contact = () => {
  return (
    <section className="animate__animated animate__fadeIn text-center h-screen flex flex-col mt-30 gap-5 lg:mt-50">
      <h2>Me siga nas redes sociais:</h2>
      <ul>
        <Link to={"https://www.instagram.com/angela_prado_podologa_/"}>
          <li className="flex items-center justify-center text-3xl m-6">
            <RiInstagramFill />
            Instagram
          </li>
        </Link>
        <Link to={"https://www.facebook.com/angelajoao.silva/"}>
          <li className="flex items-center justify-center text-3xl m-6">
            <RiInstagramFill />
            Facebook
          </li>
        </Link>
      </ul>
      <h2>Entre em contato e agende um horário:</h2>
      <ul>
         <Link to={"https://wa.me/5516993174694?text=Olá eu gostaria de agendar um horário"}>
          <li className="flex items-center justify-center text-3xl m-6">
            <IoLogoWhatsapp />
           Whatsapp
          </li>
        </Link>
      </ul>
    </section>
  );
};
