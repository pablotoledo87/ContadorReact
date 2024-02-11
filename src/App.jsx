import Contador from "./components/Contador";
import Informacion from "./components/Informacion";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const anioActual = 2023;
  
  return (
    

    <section className="container">
      <h1 className="display-3 text-center">Proyecto de react</h1>
      
      <Informacion comision='c/76i' anioActualProps={anioActual}/>
      <Contador/>
    </section>
    
  )
}

export default App;
