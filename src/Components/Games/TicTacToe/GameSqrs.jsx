import React from 'react';
import "./GameSqrs.scss";

function GameSqrs(props){
    return <div className={props.typeColor}>{props.type}</div>
}
export default GameSqrs;