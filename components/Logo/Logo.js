import React from 'react';
import BurgerLogo from '../../assests/image/original.png';
import classes from './Logo.css';
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="MyBurger"/>
    </div>
)

export default logo;