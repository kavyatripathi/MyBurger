//created a button class to avoid styling again and again

import React from 'react';
import classes from './Button.css'
const button = (props) => (
    <button className = {[classes.Button,classes[props.btnType]].join(' ')} 
        onClick={props.clicked}>{props.children}</button>
);

export default button;