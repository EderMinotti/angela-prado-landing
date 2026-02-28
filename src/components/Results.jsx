import Carrossel from "./Carrossel";

export const Results = () => {
  return (
    <section className="bg-emerald-800 shadow-md lg: w-[90%] rounded-xl text-center">
      <div>
        <h2 className="text-2xl font-black text-white m-3">Cuidado que Sustenta Cada Passo:</h2>
        <p className="m-6 text-white">
          {" "}
          Os pés são a base de sustentação do corpo, suportando toda a carga
          diária e permitindo a mobilidade.
        </p>
        <p className="m-6 text-white">
          Muitas vezes negligenciados, eles refletem diretamente na saúde da
          coluna, joelhos e no bem-estar geral. Manter a saúde podológica em dia
          previne complicações severas, como fissuras profundas, unhas encravadas
          e infecções fúngicas que comprometem a qualidade de vida.
        </p>
        <p className="m-6 text-white">
          {" "}
          O atendimento especializado em podologia vai além da estética: é um
          procedimento clínico que garante o corte técnico correto, a remoção
          segura de calosidades e a assepsia profunda com materiais rigorosamente
          esterilizados.
        </p>
        <p className="m-6 text-white">
          Tratar os pés com um profissional é investir em prevenção, conforto e na
          liberdade de caminhar sem dor.
        </p>
        <h2 className="text-2xl text-bold text-white m-3">Resultados:</h2>
        <h3 className="m-6 text-white">
          Veja como os procedimentos podem trazer grandes melhoras:
        </h3>
      </div>
      <Carrossel />
    </section>
  );
};
