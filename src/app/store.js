import {configureStore} from '@reduxjs/toolkit'
import toggleReducer from '../slice'

export const store=configureStore({
    reducer:{
     isTheme :toggleReducer,
    }
})