import React from 'react';

function Mentors(props){
    let display = props.mentors.map(elem=>elem+', ');
    return<div>
        <h2>Mentors: {display}</h2>
    </div>
}


export default Mentors