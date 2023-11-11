import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cartItems : [],
        totalPrice: 0,
        totalItems : 0,
        totalDiscount : 0,
        orderTotal : 0
    },
    reducers : {

        //Reducer to add items in cart
        addTocart: (state, action) => {
            const newItem = {...action.payload};
            const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);

            //handle the case when item is already present in the cart
            if (existingItemIndex !== -1) {
                state.cartItems[existingItemIndex].count +=1
                state.totalPrice += state.cartItems[existingItemIndex].price;
                state.totalItems +=1;

                state.totalDiscount += Math.floor((((newItem.discountPercentage)/100)*newItem.price));
                state.orderTotal = state.totalPrice-state.totalDiscount;
            } 
            //When a new item is added to the cart
            else {
                newItem.count = 1;
                state.cartItems.push(newItem);
                state.totalPrice += newItem.price;
                state.totalItems +=1;
                state.totalDiscount += Math.floor((((newItem.discountPercentage)/100)*newItem.price));
                state.orderTotal = state.totalPrice-state.totalDiscount;
            }
        },


        //handle increment button for each cart item
        incrementCount: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            state.cartItems[itemIndex].count += 1;
            state.totalPrice += state.cartItems[itemIndex].price;
            state.totalItems += 1;
            state.totalDiscount = calculateTotalDiscount(state.cartItems);
            state.orderTotal = state.totalPrice-state.totalDiscount;
        },
        
        //handle decrement button for each cart item
        decrementCount: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            
            if (state.cartItems[itemIndex].count > 1) {
                state.cartItems[itemIndex].count -= 1;
                state.totalPrice -= state.cartItems[itemIndex].price;
                state.totalItems -= 1;
                state.totalDiscount = parseFloat(calculateTotalDiscount(state.cartItems).toFixed(1));
                state.orderTotal = state.totalPrice - state.totalDiscount;
            } else {
                // Subtract the discount when count is 1 and remove the item
                state.totalDiscount -= Math.floor(((state.cartItems[itemIndex].discountPercentage / 100) * state.cartItems[itemIndex].price));
                state.totalPrice -= state.cartItems[itemIndex].price;
                state.orderTotal = state.totalPrice - state.totalDiscount;
                state.totalItems -= 1;
        
                const newcart = state.cartItems.filter((item) => item.id !== action.payload.id);
                state.cartItems = newcart;
            }
        },
        
        
    }
});

//helper function to calculate total discount
const calculateTotalDiscount = (cartItems) => {
    return cartItems.reduce((total, item) => {
        return Math.floor((total +((item.discountPercentage / 100) * item.price * item.count)));
    }, 0);
};

export default cartSlice.reducer;

export const {addTocart, incrementCount, decrementCount} = cartSlice.actions;