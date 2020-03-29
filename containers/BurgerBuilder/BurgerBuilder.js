import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 15,
    cheese: 30,
    bacon: 100,
    meat: 110
};
class BurgerBuilder extends Component {
    //constructor(props) {
    //    super(props);
    //    this.state={...}
    //}
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        
        totalPrice : 40,
        buttonEnable: false,
        purchasing: false
    }
    //this.setstate works only with arrow functions 
    purchaseHandler=() => {
        this.setState({purchasing: true});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount= oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const UpdatedPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice= oldPrice + UpdatedPrice;
        this.setState({totalPrice: newPrice , ingredients: updatedIngredients})
       this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) =>{
        const count = this.state.ingredients[type];
        const updatedIngredients = {
            ...this.state.ingredients
        };
        if (count!==0)
        {
        
            const removedCount = count-1;
            
            updatedIngredients[type]= removedCount;
            const UpdatedPrice = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice= oldPrice - UpdatedPrice;
            this.setState({totalPrice: newPrice , ingredients: updatedIngredients})
             
        }
        else{
            console.log("No ingredient (of the type asked) to remove!");
        }
        this.updatePurchaseState(updatedIngredients);  
    }

    updatePurchaseState (ingredients) {
        ingredients = {
            ...this.state.ingredients
        };
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({buttonEnable: sum>0})
        /*if (this.state.totalPrice>40)
        {
            this.setState({buttonEnable: true})
        }*/
    }

    //clicking the backdrop should allow to exit the modal
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () =>{
        alert('Your Burger is being prepared!');
    }
    render () {
        return (
            <Auxiliary>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary
                price = {this.state.totalPrice}
                ingredients={this.state.ingredients}
                purchaseCancelled = {this.purchaseCancelHandler}
                purchaseContinue = {this.purchaseContinueHandler} />
            </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                    enabled={this.state.buttonEnable}
                />
            </Auxiliary>
        );
    }
};
export default BurgerBuilder;