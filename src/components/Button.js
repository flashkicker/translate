import React, { Component } from 'react'
import LanguageContext from '../contexts/languageContext'

class Button extends Component {
    static contextType = LanguageContext

    render() {
        const text = this.context === 'english' ? 'Submit' : 'Sottoscrivi'
        return <button className="ui button primary">{text}</button>
    }
}

export default Button