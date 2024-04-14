import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cart_cross_icon from '../../assets/cart_cross_icon.png'

const ListProduct = () => {
  //fetching data and saving the data in this state variable
  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>{setAllProducts(data)});
  }

  //running the function whenever this component is mounted
  useEffect(()=>{
    fetchInfo();
  },[]) //i want this function to be executed only once, so i am adding this empty array
  
  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
          return <div key={index} className="listproduct-format-main listproduct-format"> 
            <img src={product.image} alt="" className='listproduct-product-icon'/>
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img className='listproduct-remove-icon' src={cart_cross_icon} alt="" />
          </div>
        })}
        {}
      </div>

    </div>
  )
}

export default ListProduct
