import React, { Component } from "react"

import UserCreate from "./UserCreate"
import { LanguageStore } from "../contexts/languageContext"
import ColorContext from "../contexts/colorContext"
import LanguageSelector from "./LanguageSelector"

class App extends Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					<br />
					<ColorContext.Provider value="red">
						<UserCreate />
					</ColorContext.Provider>
				</LanguageStore>
			</div>
		)
	}
}

export default App
