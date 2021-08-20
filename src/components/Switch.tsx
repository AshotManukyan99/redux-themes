import React from "react"
import checkboxSwitch from "../styles/switch.module.scss"

interface ISwitch {
    isOn: boolean
    handleToggle: () => void
}

const Switch:React.FC<ISwitch> = ({isOn, handleToggle}) => {
    return (
        <div className={checkboxSwitch.container}>
            <input
                checked={isOn}
                onChange={handleToggle}
                className={checkboxSwitch.checkbox}
                id={`checkboxSwitch`}
                type="checkbox"
            />
            <label className={checkboxSwitch.background} htmlFor={`checkboxSwitch`}>
                <div className={checkboxSwitch.button}/>
            </label>
        </div>
    )
}

export default Switch
