import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Time from './components/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores(...colaboradores. colaborador)
  }
  
  return (   
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoColaboradorAdicionado(colaborador)} />
      <Time nome="Programação" />
      <Time nome="Front-End" />
    </div>
  );
}

export default App;
