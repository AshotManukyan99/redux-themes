import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {actions} from "../store/theme"
import {AppStateType} from "../store/store";
import Switch from "./Switch"

const Navbar:React.FC = () => {
    const navBar = useSelector((state: AppStateType) => state.theme.navBar)
    const themesType = useSelector((state: AppStateType) => state.theme.themesType)
    const dispatch = useDispatch()
    const handlerToggle = () => dispatch(actions.toggleTheme(!themesType))


    return (
        <div className={navBar.bar}>
            <div className={navBar.header}>this is the header</div>
            <Switch isOn={themesType} handleToggle={handlerToggle}/>
        </div>
    )
}

export default Navbar
