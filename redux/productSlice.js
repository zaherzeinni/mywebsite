import { createSlice } from "@reduxjs/toolkit";


const initialState = { 

    products:[]
    

 }

const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        //functions add products 
        PostAdd: (state, action) => {
            console.log("action payload", action.payload);
            // state.products(action.payload);
            state.products=action.payload
    }  }
})

//array of products 
export const selectAllProducts = (state)=>state.products

export const { PostAdd } = ProductSlice.actions; // functions

export default ProductSlice.reducer