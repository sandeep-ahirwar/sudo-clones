import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tabs = (props) => {
    
    return (
        <TouchableOpacity style={styles.container}
            onPress = {props.onPress}>
                {props.icon && <MaterialCommunityIcons name={props.icon} color = {props.color} size={26} />}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',     
    },
    texts: {
        fontSize: 13,
    }
})


export default Tabs;

