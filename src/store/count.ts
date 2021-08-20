import {InferActionsTypes} from "./store"

const initialState = 0

const countReducer = (state = initialState, action: Actions): number => {
    switch (action.type) {
        case "ADD_ONE":
            return state + 1
        case "SUB_ONE":
            return state - 1
        default:
            return state
    }
}


export const actions = {
    addOne: () => ({type: "ADD_ONE"} as const),
    subOne: () => ({type: "SUB_ONE"} as const)
}


type Actions = InferActionsTypes<typeof actions>
export default countReducer
