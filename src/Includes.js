import React from 'react';

function Includes(props){
    return<div>
        <h4>User input is in the list of names: {(props.mentors.includes(props.input)) ? 'true' : 'false'}</h4>
    </div>

}



export default Includes