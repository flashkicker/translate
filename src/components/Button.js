import React, { Component } from "react"
import LanguageContext from "../contexts/languageContext"
import ColorContext from "../contexts/colorContext"

class Button extends Component {
	renderSubmit = value => {
		return value === "english" ? "Submit" : "Sottoscrivi"
	}

	renderButton = color => {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{value => {
						return this.renderSubmit(value)
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
