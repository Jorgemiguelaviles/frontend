import { useState, type ReactNode } from "react";
import "../../shared/style/AlternadorIdealReal.css";

interface AlternadorIdealRealProps {
  ideal: ReactNode;
  real: ReactNode;
}

function AlternadorIdealReal({ ideal, real }: AlternadorIdealRealProps) {
  const [modo, setModo] = useState<"ideal" | "real">("ideal");

  const alternar = () => {
    setModo((prev) => (prev === "ideal" ? "real" : "ideal"));
  };

  return (
    <div className="alternador-container">
      <div className="alternador-header">
        <button onClick={alternar} aria-label="Anterior">
          ←
        </button>

        <h3>{modo === "ideal" ? "Arquitetura Ideal" : "Arquitetura Real"}</h3>

        <button onClick={alternar} aria-label="Próximo">
          →
        </button>
      </div>

      <div className="alternador-conteudo">
        {modo === "ideal" ? ideal : real}
      </div>
    </div>
  );
}

export default AlternadorIdealReal;
