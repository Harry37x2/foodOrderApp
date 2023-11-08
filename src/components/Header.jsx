import React, { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CardContext from '../contexts/CartContext'
import ModalContex from '../contexts/ModalContex'

const Header = () => {
    const cartCtx = useContext(CardContext)
    const modalCtx = useContext(ModalContex)
    const totalCartItems = cartCtx.items.reduce((total, item)=>{
        return total + item.quantity
    },0)

    function handleShowCart() {
        modalCtx.showCart()
    }

  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt="logo" />
            <h1>React Food Ordering App</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
        </nav>
    </header>
  )
}

export default Header