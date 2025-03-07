import React,{Component} from "react";

export default class ShoppingCart extends Component{
state ={
    products:[
        {id:1,productName:"iphone",price:8900,quantity:0},
        {id:2,productName:"sony",price:9000,quantity:0},
        {id:3,productName:"redmi",price:8900,quantity:0},
        {id:4,productName:"iqooo",price:8900,quantity:0},
        {id:5,productName:"Blue",price:8900,quantity:0},
        {id:6,productName:"realme",price:8900,quantity:0},
    ],
};

    render(){
        return<div>
            <h4>Shopping Cart</h4>
            <div>
            {this.state.products.map((prod)=>{
                return< product key={prod.id}/>
            })}
            </div>
            </div>
    }
}