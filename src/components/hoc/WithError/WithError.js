import React from 'react'
import Modal from "../../Ui/Modal/Modal"
import Aux from '../Aux'

const withError = (WrappedComponent) => {
	return (props) => {
		return (
			<Aux>
				<Modal show={true}> Something didnt work</Modal>
				<WrappedComponent {...props} ></WrappedComponent>
			</Aux>
		)
	}
}

export default withError
