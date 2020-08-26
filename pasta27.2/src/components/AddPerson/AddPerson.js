import React from 'react';

import classes from './AddPerson.css';

const addPerson = (props) => (
    <div className={classes.AddPerson}>
        <button onClick={props.personAdded}>Add Person</button>
    </div>
);

export default addPerson;