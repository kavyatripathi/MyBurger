import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) =>{
    let tranformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key= {igKey + i} type={igKey}/>;
        }); // Array() is a default js method to create an array. we r doing this so that we can access ingredients
        //dynamically. String ("cheese","bacon"etc.) are objects therefore inorder to apply map we need to convert them into array.
        
    })
    .reduce((arr,el) =>{
        return arr.concat(el)
    }, [] );
    if (tranformedIngredients.length===0){
        tranformedIngredients= <p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;