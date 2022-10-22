import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeWrapper = ({children}) => {
    const {isThemeLoading} = useTheme();
    
    if(isThemeLoading)
        return null

    return children

}

export default ThemeWrapper;

