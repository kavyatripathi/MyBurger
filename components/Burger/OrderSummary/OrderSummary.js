import React from 'react';
//import Auxiliary from '../../hoc/Auxiliary.js';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map( igKey => { 
        return  <li key={igKey}><span style = {{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>

    });
    return(
    
        <div>
            <h3>Your Order</h3>
            <p>Your lip smacking burger has got the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Your Burger Price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout ? </p>
            <Button btnType = "Danger" clicked = {props.purchaseCancelled}>CANCEL</Button>
            <Button btnType = "Success" clicked = {props.puchaseContinue}>CONTINUE</Button>
        </div>    
)};
export default orderSummary;