import React from "react";


export default function Breeds(props) {

    return (
        <ul>
            {props.array.map((dog, idx) => <li key={idx} onClick={() => props.onBreedsClick(dog)}>{dog}</li>)}
        </ul>
    )
}
