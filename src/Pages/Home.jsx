import { AboutMe } from "../components/AboutMe";
import { Localization } from "../components/Location";
import { Results } from "../components/Results";

export const Home = () => {
  return (
    <div className="animate__animated animate__fadeIn lg: flex flex-col items-center gap-6">
      <picture className="min-w-full flex justify-center mt-10 mb-10">
        <img className="shadow-md" src="./teste.png" alt="" />
      </picture>
      <Results />
      <Localization />
    </div>
  );
};
