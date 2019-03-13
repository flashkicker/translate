import React, { Component } from "react"

import UserCreate from "./UserCreate"
import LanguageContext from "../contexts/languageContext"

class App extends Component {
	state = { language: "english" }

	onLanguageChange = language => {
		this.setState({ language })
	}

	render() {
		return (
			<div className="ui container">
				<div>
					{"Select a language: "}
					<i
						className="flag us"
						onClick={() => {
							this.onLanguageChange("english")
						}}
					/>
					<i
						className="flag it"
						onClick={() => {
							this.onLanguageChange("italian")
						}}
					/>
				</div>
				<br />
				<LanguageContext.Provider value={this.state.language}>
					<UserCreate />
				</LanguageContext.Provider>
			</div>
		)
	}
}

export default App