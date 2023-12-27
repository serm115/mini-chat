import { configureStore } from '@reduxjs/toolkit'

import globalReducer from './slices/global'
import authReducer from './slices/auth'

const store = configureStore({
    reducer: {
        global: globalReducer,
        auth: authReducer,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
