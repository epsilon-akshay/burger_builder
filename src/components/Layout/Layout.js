import React from 'react'
import Aux from "../hoc/Aux"
import styles from "./Layout.module.css"
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidebar from '../Sidebar/Sidebar'

const layout = (props) => {
	return (
		<Aux>
			<Toolbar />
			<Sidebar />
			<main className={styles.Content}>
				{props.children}
			</main>
		</Aux>
	)
}

export default layout
