import React, { Component } from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../hoc/Aux'

class Modal extends Component {
	shouldComponentUpdate(nextProp, nextState) {
		return this.props.children !== nextProp.children || nextProp.show !== this.props.show
	}

	render() {
		return (
			<Aux>
				<Backdrop show={this.props.show} handleBackdrop={this.props.handleBackdrop} />
				<div className={classes.Modal} style={{ transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)' }} opacity={this.props.show ? '1' : '0'}>
					{this.props.children}
				</div>
			</Aux>
		)
	}
}

export default Modal
