import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {actions} from "../store/count"
import {AppStateType} from "../store/store";


const Counter: React.FC = () => {
    const count = useSelector((state: AppStateType) => state.count)
    const countStyle = useSelector((state: AppStateType) => state.theme.counter)
    const dispatch = useDispatch()
    return (
        <div className={countStyle.counterContainer}>
            <button onClick={() => dispatch(actions.subOne())} className={countStyle.button}>
                -
            </button>
            <div className={countStyle.margin}>{count}</div>
            <button onClick={() => dispatch(actions.addOne())} className={countStyle.button}>
                +
            </button>
        </div>
    )
}

export default Counter
