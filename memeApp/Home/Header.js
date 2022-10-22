import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeProvider';


const Header = () => {

    const {theme} = useTheme();

    return (
        <View style={[Styles.wrapper, {backgroundColor: theme.bar.backgroundColor}]}>
            <View style={Styles.heading}>
                <MaterialCommunityIcons name='alpha-m-circle' color = {theme.fontColor} size={45} />
                <Text style={[Styles.headerText, {color: theme.fontColor}]}> The MemeApp </Text>
            </View>

            <View style={Styles.subHeader}>
                <Text style={[Styles.textSecondry, {color: theme.fontColor}]}> Hi, THERE 👋</Text>
                <Text style={[Styles.textSecondry, {color: theme.fontColor}]}> Enjoy the best and random memes here!!! </Text>
            </View>

        </View>
    )
}


const Styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: 120,
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },  
    headerText: {
        fontSize: 20,
        fontWeight: '800',
        fontFamily: 'sans-serif-medium',
    },
    subHeader: {
        padding: 5,
    },  

    textSecondry: {
        paddingHorizontal: 5,
        fontSize: 14,
        fontFamily: 'sans-serif-light'
    },
})


export default Header;



