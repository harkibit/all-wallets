import React from 'react'
import "./Button.css"

export default function Button(props) {
    const { text, color, fontSize} = props

    const style = {
        color : color,
        fontSize : fontSize,
    }
    return (
        <div>
            <button style = {style} className="btn-create-trans" type="submit">
                {text}
              </button>
        </div>
    )
}
