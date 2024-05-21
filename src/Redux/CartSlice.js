import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "cart",
    initialState:{
        value:[]
    },
    reducers:{
        addItem:(state,action)=>{
           var addData = action.payload
           state.value=[...state.value,{addData,qty:1}]
        },
        
        incrementQty:(state,action)=>{
            var id = action.payload;
            state.value = state.value.map((data)=>data.addData.id===id? {...data, qty : data.qty+1 } : data)
        }, 

        decreamentQty:(state,action)=>{
            var id = action.payload;
            state.value = state.value.map((data)=>data.addData.id===id? {...data,qty : data.qty-1 }: data)
        }, 
        removeQty : (state, action)=>{
            var id = action.payload;
            state.value = state.value.filter(data=>data.addData.id!==id )
        }
    }
}) 
export const { addItem,incrementQty,decreamentQty,removeQty } = Slice.actions;
export default Slice.reducer