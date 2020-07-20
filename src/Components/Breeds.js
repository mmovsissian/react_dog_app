import React from "react";
import Breed from './Breed'


export default function Breeds(props) {

    return (
        <ul>
            {props.array.map((dog, idx) => <Breed key={idx} onBreedsClick={props.onBreedsClick} dog={dog} />)}
        </ul>
    )
}
