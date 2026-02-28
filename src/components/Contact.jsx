import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section className="text-center h-screen flex flex-col mt-30 gap-5">
      <h2>Me siga nas redes sociais:</h2>
      <ul>
        <Link to={"https://www.instagram.com/angela_prado_podologa_/"}>
          <li className="flex items-center justify-center text-3xl m-6">
            <RiInstagramFill />
            Instagram
          </li>
        </Link>
        <Link>
          <li className="flex items-center justify-center text-3xl m-6">
            <RiInstagramFill />
            Tiktok
          </li>
        </Link>
        <Link to={"https://www.facebook.com/angelajoao.silva/"}>
          <li className="flex items-center justify-center text-3xl m-6">
            <RiInstagramFill />
            Facebook
          </li>
        </Link>
      </ul>
    </section>
  );
};
