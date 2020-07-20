import React from 'react';
import { getRandomColor } from '../utils/color';

export default function withBorder(Cmp) {

    
    return function (props) {
        const randomColor = getRandomColor();
        return(
            <div style={{border: `1px solid ${randomColor}`}}>
                <Cmp {...props} borderColor={randomColor} />
            </div>
        )
    }  
}