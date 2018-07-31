import React, { Component } from 'react';
import './App.css';

import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resumen from './componentes/Resumen';
import Resultado from './componentes/Resultado';

//helpers
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './helper';

class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (datos) => {
    
    const {marca, year, plan} = datos;

    let resultado = 2000;
    const diferencia = obtenerDiferenciaAnio(year)

    resultado -= ((diferencia * 3) * resultado / 100);
    resultado = calcularMarca(marca) * resultado;
    let incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    const datosAuto = {
      marca: marca,
      year: year,
      plan: plan
    }

    this.setState({
      resultado: resultado,
      datos: datosAuto
    })
    console.log(resultado);
  }

  render() {
    return (
      <div className="contenedor">
        <Header
          titulo="Cotizador de seguro de auto"
        />

        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          <Resumen datos={this.state.datos} />
          <Resultado resultado={this.state.resultado} />
        </div>

      </div>
    );
  }
}

export default App;
