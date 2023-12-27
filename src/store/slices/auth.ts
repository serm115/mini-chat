import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store'

interface AuthState {
    username: string
    password: string
}

const initialState: AuthState = {
    username: '',
    password: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<AuthState>) => {
            state.username = action.payload.username
            state.password = action.payload.password
        },
    },
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer

// selectors
export const selectUsername = (state: RootState) => state.auth.username
export const selectPassword = (state: RootState) => state.auth.password
