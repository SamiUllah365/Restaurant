import React, { useState } from 'react'
import Nav from '../Component/Nav'
import MenuBar from '../Component/MenuBar'
import CartBtn from '../Component/CartBtn'
import ExploreBtn from '../Component/ExploreBtn'
import MenuCard from '../Component/MenuICard'
import MenuSideBar from '../Component/MenuSideBar'
import ItemShowOffcanvas from '../Component/ItemShowOffcanvas'
import Footer from '../Component/Footer'
import {getCartTotals}  from '../utils/getTotal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainMenuPage = () => {

  let[showItem , setShowItem] = useState([])
  let[addItem , setAddItem] = useState([])

let { cartTotalItems, cartTotalPrice } = getCartTotals(addItem);

  const openDetail = (item) =>{
    showItem = item;
    setShowItem(showItem)
  }
  const addToCart = (CartItem) =>{

    // if (addItem.length === 0) {
    //   let copyArray = [...addItem];
    //   copyArray.push(CartItem);
    //   setAddItem(copyArray);
    // }
    // else {
      let ProductExist = addItem.find((Item) => Item.Id === CartItem.Id);
      if (ProductExist) {
        toast.success(ProductExist.Title + " " +" already exist in your cart");
        // setAddItem(
        //   addItem.map((Item) => Item.Id === CartItem.Id
        //     ? { ...ProductExist, Quantity: ProductExist.Quantity + 1 } : CartItem)
        // )
      }
      else {
        let copyArray = [...addItem]
        copyArray.push(CartItem)
        setAddItem(copyArray)
        //setAddItem([...addItem, { ...CartItem}])
      }
     //}
  }

  const handleAddToProduct = (Product) => {
    let ProductExist = addItem.find((item) => item.Id === Product.Id);
    if (ProductExist) {
      setAddItem(
        addItem.map((item) => item.Id === Product.Id
          ? { ...ProductExist, Quantity: ProductExist.Quantity + 1 } : item)
      )
    }
    // else {
    //   setAddItem([...addItem, { ...Product, Quantity: 1 }])
    // }
  }

  const handleRemoveToProduct = (Product) => {
    const updatedCartItems = addItem.map(cartItem => {
      if (cartItem.Id === Product.Id) {
        return {
          ...cartItem,
          Quantity: cartItem.Quantity - 1
        };
      }
      return cartItem;
    });
    // Remove the item from the cart if its counter becomes 0
    const filteredCartItems = updatedCartItems.filter(cartItem => cartItem.Quantity >= 1);
    setAddItem(filteredCartItems);
  }

  return (
    <>
    <Nav counter={cartTotalItems} cartTotalPrice={cartTotalPrice}/>
    <MenuBar alert={<ToastContainer/>}/>
    <CartBtn counter={cartTotalItems} addItem={addItem} handleAddToProduct={handleAddToProduct} handleRemoveToProduct={handleRemoveToProduct} />
    <ExploreBtn counter={cartTotalItems} cartTotalPrice={cartTotalPrice}/>
    <MenuSideBar/>
    <MenuCard openDetail={openDetail}/>
    <ItemShowOffcanvas showItem={showItem} addToCart={addToCart}/>
    <Footer/>
    </>
  )
}

export default MainMenuPage