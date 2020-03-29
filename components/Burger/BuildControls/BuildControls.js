import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls  = [
    {label: 'Salad' , type : 'salad'},
    {label: 'Cheese' , type : 'cheese'},
    {label: 'Bacon' , type : 'bacon'},
    {label: 'Meat' , type : 'meat'}

]

const buildControls = (props) =>(
    <div className = {classes.BuildControls}>
        <p>Your Burger Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} 
                label={ctrl.label}
                type={ctrl.type}
                added= {() => props.ingredientAdded(ctrl.type)}
                removed = {() => props.ingredientRemoved(ctrl.type)}
            />
        ))}
        <button className={classes.OrderButton} 
        disabled={!props.enabled}
        onClick = {props.ordered} >ORDER NOW</button>
    </div>
);

export default buildControls;