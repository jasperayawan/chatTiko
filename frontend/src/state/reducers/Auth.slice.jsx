import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null
}

export const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setUserData: (state, { payload }) => {
            state.userData = payload
        },
        setLogout: (state) => {
            state.userData = null
        }
    }
})

export const { setUserData, setLogout } = AuthSlice.actions;
export default AuthSlice.reducer