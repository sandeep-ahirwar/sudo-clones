import React, {createContext, useContext, useState, useEffect} from "react";
import {View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deafultTheme, darkTheme } from "./theme"

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(darkTheme);
    const [isThemeLoading, setisThemeLoading] = useState(true);

    const findOldTheme = async () => {
        const themeMode = await AsyncStorage.getItem('thememode');
        if(themeMode !== null){
            themeMode === 'default' ? setTheme(deafultTheme) : setTheme(darkTheme)
        }
        setisThemeLoading(false)
    }

    useEffect( () => {
        findOldTheme();
    }, [])


    const updateTheme = (currentTheme) => {
        const newTheme = currentTheme === 'default' ? darkTheme : deafultTheme
        setTheme(newTheme);
        AsyncStorage.setItem('thememode', newTheme.themeMode)
    }

    
    return(
        <ThemeContext.Provider value={{theme, isThemeLoading, updateTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}


export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider;
