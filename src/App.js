import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [ resumen , setResumen ] = useState({
    cotizacion: 0,
    data: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [ cargando, setCargando ] = useState(false)

  const { data, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header 
        titulo='cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario 
          setResumen={setResumen}
          setCargando={setCargando}
        />
        { cargando ? <Spinner />
          :
          null
        }
        {!cargando 
        ? <Resumen 
            data={data}
          />
        : null}
        
        { !cargando 
        ? <Resultado 
            cotizacion = { cotizacion }
          />
        : null}
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
