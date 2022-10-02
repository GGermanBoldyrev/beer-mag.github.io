import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: 0,
  sort: {
    name: 'популярность',
    sortProperty: 'rating'
  }
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categotyId = action.payload
    }
  }
})

export const { setCategoryId } = filterSlice.actions

export default filterSlice.reducer