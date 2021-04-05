import React from 'react';

export const Card = props => (
    <div>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size180x180`}></img>
        <h2> {props.monster.name}</h2>
        <p> {props.monster.email}</p>
    </div>
)