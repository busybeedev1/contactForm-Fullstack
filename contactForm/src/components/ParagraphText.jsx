import React from 'react';
import "./paragraphText.css";
import AllUSerData from '../Pages/AllUSerData';

const ParagraphText = ({ text, style }) => {
    return (
        <>
            <div className='text'>
                <p className="paragraph" style={style}>
                    {text}
                </p>
            </div>
            {/* <div className="view-info">
                <button type='submit' className='view-btn' onClick={AllUSerData}>
                    View All Information
                </button>
            </div> */}
        </>
    )
}

export default ParagraphText
