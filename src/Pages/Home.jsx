import { AboutMe } from "../components/AboutMe";
import Carrossel from "../components/Carrossel";
import { Localization } from "../components/Location";
import { Results } from "../components/Results";

export const Home = () => {
  return (
    <div className="animate__animated animate__fadeIn lg:flex flex-col items-center gap-6">
      <Carrossel caminho={["./imagem1.jpg","./imagem2.jpg","./imagem3.jpg","./imagem4.jpg","./imagem5.jpg"]}/>
      <Results />
      <Localization />
    </div>
  );
};
