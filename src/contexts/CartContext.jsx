import React, {createContext, useReducer} from 'react'

const CardContext = createContext({
    items: [],
    addItem: (item)=>{},
    removeItem: (id)=>{}
})

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existinCartItemIndex = state.items.findIndex((item)=>item.id===action.item.id);
        const updatedItems = [...state.items]

        if (existinCartItemIndex > -1) {
            const existingItem = state.items[existinCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity+1
            };
            updatedItems[existinCartItemIndex] = updatedItem
        }else{
            updatedItems.push({...action.item, quantity: 1})
        }
        return {...state, items: updatedItems}
    }

    if (action.type === 'REMOVE_ITEM') {
        const existinCartItemIndex = state.items.findInndex((item)=>item.id===action.id);
        const existingCartItem = state.items[existinCartItemIndex];
        const updatedItems = [...state.items]

       if (existingCartItem.quantity === 1) {
        updatedItems.splice(existinCartItemIndex,1)
       }else{
        const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity -1
        }
        updatedItems[existinCartItemIndex] = updatedItem
       }

       return {...state, items: updatedItems}
    }
    return state
}

export function CartContextProvider({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});
    
    function addItem(item) {
        dispatchCartAction({type: 'ADD_ITEM', item: item})
    }
    
    function removeItem(id) {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id})
    }
    
    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    }

    return <CardContext.Provider value={cartContext}>{children}</CardContext.Provider>
}

export default CardContext
