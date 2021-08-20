import React from "react";
import {useSelector} from "react-redux"
import Layout from "../components/Layout"
import Counter from "../components/Counter"
import {AppStateType} from "../store/store";


const Main: React.FC = () => {
    const main = useSelector((state: AppStateType) => state.theme.main)

    return (
        <Layout>
            <div className={main.text}>
                <Counter/>
            </div>
        </Layout>
    )
}


export default Main
