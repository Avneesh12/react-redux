const {createSlice} = require("@reduxjs/toolkit")



const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item => item.id !== action.payload)
        },
        resetCart(state){
            state = []
            return state
        }
        
    }
})

export const { add , remove , resetCart} = cartSlice.actions;

export default cartSlice.reducer;