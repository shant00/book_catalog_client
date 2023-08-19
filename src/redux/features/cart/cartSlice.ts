import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";
interface ICart {
    books: IBook[];
}

const initialState: ICart = {
    books: [],
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action: PayloadAction<IBook>) => {
            state.books.push(action.payload)
        }
    },
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer