import React, { createContext, useState } from 'react'

    const ModalContext = createContext({
        modalPlace: '',
        showCart: ()=>{},
        hideCart: ()=>{},
        showCheckout: ()=>{},
        hideCheckout: ()=>{}
    });

    export function ModalContexProvider({children}) {
        const [modal, setModal] = useState('');

        function showCart() {
            setModal('cart')
        }

        function hideCart() {
            setModal('')
        }

        function showCheckout() {
            setModal('checkout')
        }

        function hideCheckout() {
            setModal('')
        }

        const modalCtx = {
            modalPlace: modal, 
            showCart, 
            hideCart, 
            showCheckout, 
            hideCheckout
        }

        return (
        <ModalContext.Provider value={modalCtx}>
            {children}
        </ModalContext.Provider>
    )}


export default ModalContext