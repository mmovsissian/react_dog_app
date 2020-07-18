import React from "react";


export default function Breeds(props) {

    return (
        <ul>
            {props.array.map((dog) => <li>{dog}</li>)}
        </ul>
    )
}
