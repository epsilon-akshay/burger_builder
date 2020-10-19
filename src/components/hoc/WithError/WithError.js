import React, { Component } from 'react'
import Modal from "../../Ui/Modal/Modal"
import Aux from '../Aux'

const withError = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			err: null
		}

		componentDidMount() {
			axios.interceptors.request.use(req => {
				this.setState({ err: null })
			})

			axios.interceptors.response.use(null, error => {
				this.setState({ err: error })
			})
		}

		render() {
			return (
				<Aux>
					<Modal show={this.state.err} handleBackdrop={() => this.setState({ err: null })}> {this.state.err ? null : 'Something didnt work'}</Modal>
					<WrappedComponent {...this.props} ></WrappedComponent>
				</Aux >
			)
		}
	}
}

export default withError
