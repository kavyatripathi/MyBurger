//this will have the sidedrawer,toolbar and a backdrop
import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) =>(
   
    <Auxiliary>
    <main className={classes.Content}>
    <Toolbar/>
    <div>Toolbar,Sidedrawer,Backdrop</div>
        {props.children}
    </main>
    </Auxiliary>
)

export default layout;