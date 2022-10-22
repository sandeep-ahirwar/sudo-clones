import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "./ThemeProvider";

const CustomStatusBar = () => {
    const { theme } = useTheme();
    const barstyle = theme.themeMode === 'default' ? 'dark-content' : 'light-content'

    return (
      <StatusBar backgroundColor={theme.backgroundColor} barStyle={barstyle} />
    )
  }

export default CustomStatusBar;


  