import { PiPresentationLight } from "react-icons/pi";

export const AboutMe = () => {
  return (
    <section className="lg:grid grid-cols-2 m-3">
      <picture className="min-w-full flex justify-center">
        <img className="lg:rounded-md m-5" src="./sobre_mim.png" alt="" />
      </picture>
      <div
        className="leading-[1.6] flex flex-col gap-2 text-justify
                  m-4 lg:text-center justify-center"
      >
        <h2 className=" flex items-center gap-2 text-(--cor-verde) text-2xl font-bold mb-3 lg:justify-center">
          <PiPresentationLight />
          Apresentação:
        </h2>
        <p>
          "Olá! Sou Angela Prado, podóloga especialista na saúde e no bem-estar
          dos seus pés.
        </p>
        <p>
          Acredito que pés saudáveis são a base para uma vida com mais qualidade
          e movimento.
        </p>
        <p>
          Meu foco vai além da estética: trabalho na prevenção e no tratamento
          de patologias, garantindo um atendimento humanizado, seguro e com
          total biossegurança. Vamos cuidar da sua base?"
        </p>
      </div>
    </section>
  );
};
