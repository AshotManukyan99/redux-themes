import {combineReducers, createStore} from "redux"

import countReducer from "./count"
import themeReducer from "./theme"

const reducer = combineReducers({
    count: countReducer,
    theme: themeReducer,
})

type ReducerType = typeof reducer

export type AppStateType = ReturnType<ReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export const store = createStore(reducer)

