import darkCounter from "./darkMode/counter.module.scss"
import darkLayout from "./darkMode/layout.module.scss"
import darkMain from "./darkMode/main.module.scss"
import darkNavbar from "./darkMode/navbar.module.scss"

import lightCounter from "./lightMode/counter.module.scss"
import lightLayout from "./lightMode/layout.module.scss"
import lightMain from "./lightMode/main.module.scss"
import lightNavbar from "./lightMode/navbar.module.scss"


interface IThemes {
    themesType: boolean,
    counter: { [key: string]: string },
    layout: { [key: string]: string },
    main: { [key: string]: string },
    navBar: { [key: string]: string },
}


export const darkTheme: IThemes = {
    themesType: false,
    counter: darkCounter,
    layout: darkLayout,
    main: darkMain,
    navBar: darkNavbar,
}

export const lightTheme: IThemes = {
    themesType: true,
    counter: lightCounter,
    layout: lightLayout,
    main: lightMain,
    navBar: lightNavbar,
}
