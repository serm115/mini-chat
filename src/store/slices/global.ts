import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store'
// import { User } from '@types/user.interface'

interface GlobalState {
    user: string | null
}

// const persistedUser = storageService.getWithExpiry(storageKeys.USER)?.value
const initialState: GlobalState = {
    user: null,
    // user: persistedUser,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {},
})

export default globalSlice.reducer

// selectors
export const selectUser = (state: RootState) => state.global.user
