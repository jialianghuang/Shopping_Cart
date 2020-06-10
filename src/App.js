import React, { useState } from 'react';
import './App.css';
import Product from './Product/Product'
import './bootstrap.css'
const App = props => {
  const [productsState, setProductsState] = useState({
    products:[
      {id: 1, name:'product1',stock:1,inventory:10,price:3.99},
      {id: 2, name:'product2',stock:2,inventory:20,price:4.99},
      {id: 3, name:'product3',stock:0,inventory:100,price:9.99},
      {id: 4, name:'product4', stock:2,inventory:1000,price:99.99}
    ]
  });

  const removeHandler = (index) => {
    const products = [...productsState.products]
    products.splice(index,1)
    setProductsState({
      products:products
    })
    }

  const addStockHandler = (productIndex) => {
   const productId = productsState.products.findIndex(p => p.id === productIndex )
   const product = {...productsState.products[productId]}
   if(product.inventory-product.stock>0)
   product.stock += 1
   const products = [...productsState.products]
   products[productId] = product
   setProductsState({
   products:products
   }); 
};

const total = () => {
  const products = [...productsState.products]
  let total = 0
  for(const product of products){
    total += product.stock*product.price
  }
  return Math.round(total*100)/100
}

const minusStockHandler = (productIndex) => {
  const productId = productsState.products.findIndex(p => p.id === productIndex )
  const product = {...productsState.products[productId]}
  if(product.stock>0)
  product.stock -= 1
  const products = [...productsState.products]
  products[productId] = product
  setProductsState({
  products:products
  }); 
};

    return(
      <div>
    <table className="table">
      
        <thead>
          <tr>
            <th className="col-4">Name</th>
            <th>Price</th>
            <th>+</th>
            <th>Quantity</th>
            <th>-</th>
            <th></th>
            <th>Subtotal</th>
            <th>Remaining</th>
          </tr>
        </thead>
        <tbody>
    {productsState.products.map((product,index) => {
      return <Product 
      key = {product.id}
      name = {product.name} 
      stock={product.stock}
      price={product.price}
      inventory = {product.inventory}
      addclick={() => addStockHandler(product.id)}
      minusclick={() => minusStockHandler(product.id)}
      rmvclick={() => removeHandler(index)}
      />
    })}
    </tbody>
    </table>
  <p>Total:{total()}</p>
    <button className = "btn btn-warning">Continue Shopping</button>
    <button className = "btn btn-success">Checkout</button>
    </div>
    )
  
}


export default App;
