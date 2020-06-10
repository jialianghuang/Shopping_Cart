import React from 'react';
import './Product.css'
import img from './product.jpg'
const product =(props) => {
return (
<tr>
<th className="col-4"><img alt="product" src = {img} style={{width: "100px", height : "100px"}} ></img> {props.name}</th>
<th>${props.price}</th>
<th><button className="btn btn-primary" onClick = {props.minusclick}>-</button></th>
<th><input value= {props.stock} /></th>
<th><button className="btn btn-primary" onClick = {props.addclick}>+</button></th>
<th><button className="btn btn-danger" onClick = {props.rmvclick}>remove</button></th>
<th>${Math.round(props.price*props.stock*100)/100}</th>
<th>{props.inventory - props.stock}</th>
</tr>
)
}

export default product
