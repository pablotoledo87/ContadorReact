import { useState } from "react";



const Contador = () => {
const [numero, setNumero] = useState(10)
  // let numero = 10;

  return (
    <article className="text-center">
      <h2>Contador</h2>
      <p>{numero}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNumero(numero+1);
         
        }}
      >
        +1
      </button>
    </article>
  );
};

export default Contador;
