import {darkTheme, lightTheme} from "../styles/themeObjects"
import {InferActionsTypes} from "./store";


const setCurrentTheme = (themeType: boolean) => {
    if (themeType) {
        return lightTheme
    } else {
        return darkTheme
    }
}


const initialState = lightTheme

const themeReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return action.theme
        default:
            return state
    }
}

export const actions = {
    toggleTheme: (themeType: boolean) => ({type: "TOGGLE_THEME", theme: setCurrentTheme(themeType),} as const)
}

type Actions = InferActionsTypes<typeof actions>
export default themeReducer
