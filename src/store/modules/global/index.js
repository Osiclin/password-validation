import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCriterias: []
}

export const global = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateSettings: (state, action) => {
      state.selectedCriterias = action.payload;
    }
  }
})

export const { updateSettings } = global.actions

export default global.reducer