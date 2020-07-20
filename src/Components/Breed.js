import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

function Breed(props) {
    const {match: {url}} = props;
    
    return (
        <li>
            <Link to={`${url}/${props.dog}`}>
                {props.dog}
            </Link>
        </li>
    )
}

export default withRouter(Breed);