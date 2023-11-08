import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CardContext from '../contexts/CartContext'
import { currencyFormatter } from '../util/formatting'
import Button from './UI/Button'
import ModalContex from '../contexts/ModalContex'

const Cart = () => {
    const cartCtx = useContext(CardContext)
    const modalCtx = useContext(ModalContex)
    const cartTotal = cartCtx.items.reduce((total, item) => (total += item.quantity * item.price) ,0)
    console.log(cartTotal)

    function handleHideCart() {
        modalCtx.hideCart()
    }
  return (
    <Modal className='cart' open={modalCtx.modalPlace === 'cart'}>
        <h2></h2>
        <ul>
            {cartCtx.items.map((item) => <li key={item.id}>{item.name} - {item.quantity}</li>)}
        </ul>
        <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleHideCart}>Close</Button>
            <Button>Checkout</Button>
        </p>
    </Modal>
  )
}

export default Cart