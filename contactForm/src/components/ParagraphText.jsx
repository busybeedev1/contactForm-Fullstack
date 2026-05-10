import React from 'react';
import "./paragraphText.css";

const ParagraphText = ({ text, style }) => {
    return (
        <div className='text'>
            <p className="paragraph" style = {style}>
                {text}
            </p>
        </div>
    )
}

export default ParagraphText
