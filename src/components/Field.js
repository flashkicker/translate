import React, { Component } from 'react'
import LanguageContext from '../contexts/languageContext'

class Field extends Component {
    static contextType = LanguageContext

    render() {
        const text = this.context === 'english' ? 'Name' : 'Nome'

        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field
