import React, { Component } from "react"
import LanguageContext from "../contexts/languageContext"
import ColorContext from "../contexts/colorContext"

class Button extends Component {
	renderSubmit = language => {
		return language === "english" ? "Submit" : "Sottoscrivi"
	}

	renderButton = color => {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{value => {
						return this.renderSubmit(value.language)
					}}
				</LanguageContext.Consumer>
			</button>
		)
	}

	render() {
		return (
			<ColorContext.Consumer>
				{color => {
					return this.renderButton(color)
				}}
			</ColorContext.Consumer>
		)
	}
}

export default Button
