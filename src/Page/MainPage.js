import React, { useState } from 'react'
import Nav from '../Component/Nav'
import MenuBar from '../Component/MenuBar'
import CartBtn from '../Component/CartBtn'
import ExploreBtn from '../Component/ExploreBtn'
import MenuCard from '../Component/MenuICard'
import MenuSideBar from '../Component/MenuSideBar'
import ItemShowOffcanvas from '../Component/ItemShowOffcanvas'
import Footer from '../Component/Footer'

const MainMenuPage = () => {

  let[showItem , setShowItem] = useState([])
  let[addItem , setAddItem] = useState([])

  const openDetail = (item) =>{
    showItem = item;
    setShowItem(showItem)
  }
  const addToCart = (CartItem) =>{

    if (addItem.length === 0) {
      let copyArray = [...addItem];
      copyArray.push(CartItem);
      setAddItem(copyArray);
    }
    else {
      let ProductExist = addItem.find((Item) => Item.Id === CartItem.Id);
      if (ProductExist) {
        setAddItem(
          addItem.map((Item) => Item.Id === CartItem.Id
            ? { ...ProductExist, Quantity: ProductExist.Quantity + 1 } : CartItem)
        )
      }
      else {
        let copyArray = [...addItem];
        copyArray.push(CartItem);
        setAddItem(copyArray);
      }
    }
    console.log(addItem)
  }

  const handleAddToProduct = (Product) => {
    // let ProductExist = addItem.find((item) => item.Id === Product.Id);
    // if (ProductExist) {
    //   setAddItem(
    //     addItem.map((item) => item.Id === Product.Id
    //       ? { ...ProductExist, Quantity: ProductExist.Quantity + 1 } : item)
    //   )
    // }
    // else {
    //   setAddItem([...addItem, { ...Product, Quantity: 1 }])
    // }
  }


    //console.log()
    // let copyItem = [...addItem]
    // copyItem.push(CartItem);
    // setAddItem(copyItem)
    // console.log(addItem)
  return (
    <>
    <Nav counter={addItem.length}/>
    <MenuBar/>
    <CartBtn counter={addItem.length} addItem={addItem}/>
    <ExploreBtn/>
    <MenuSideBar/>
    <MenuCard openDetail={openDetail}/>
    <ItemShowOffcanvas showItem={showItem} addToCart={addToCart} />
    <Footer/>
    </>
  )
}

export default MainMenuPage