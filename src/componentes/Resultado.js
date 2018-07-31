import React, {Component} from 'react';

import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component {

	render() {
		const resultado = this.props.resultado;
		const mensaje = (!resultado) ? 'Elije marca, año y plan' : 'El resultado es: '
		return (
			<div className="gran-total">
				{mensaje}
				<span>{resultado}</span>
			</div>
		)
	}

}


export default Resultado;
