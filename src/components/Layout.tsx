import React from "react"
import {useSelector} from "react-redux"
import Navbar from "./Navbar"
import {AppStateType} from "../store/store";

const Layout:React.FC = ({children}) => {
    const layout = useSelector((state:AppStateType) => state.theme.layout)

    return (
        <div className={layout.site}>
            <Navbar/>
            <div>{children}</div>
        </div>
    )
}
export default Layout
