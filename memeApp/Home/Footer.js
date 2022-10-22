import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from "../context/ThemeProvider";


const Footer = (props) => {

    const {theme} = useTheme();

    const reload = () => {
        props.load();
        props.scroll();
    }

    return (
        
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={reload}>
            <MaterialCommunityIcons name='refresh' color={theme.fontColor} size={45} />
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 55,
    }
});


export default Footer;

