import { createSlice } from "@reduxjs/toolkit"

const InitialLanguage = { lg: "cs" }

export const languageSlice = createSlice({
  name: "lg",
  initialState: InitialLanguage,
  reducers: {
    setLanguage: (state, action) => {
      state.lg = action.payload
    },
  },
})

export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer
