import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  // O hook useLocation retorna o objeto da rota atual
  const { pathname } = useLocation();

  useEffect(() => {
    // Faz o scroll para o topo (coordenadas 0, 0)
    window.scrollTo(0, 0);
    
  }, [pathname]); // Executa toda vez que o caminho da URL mudar

  return null;
};

export default ScrollToTop;