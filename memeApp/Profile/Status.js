import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, LogBox} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from "react-native-paper";
import { useTheme } from '../context/ThemeProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
 

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);


const Status = ({route, navigation}) => {

    const {theme} = useTheme();

    const [name, setName] = useState(route.params.name);
    const [age, setAge] = useState(route.params.age);
    const [gender, setGender] = useState(route.params.gender);
    const [city, setCity] = useState(route.params.city);
    const [profession, setProfession] = useState(route.params.profession);
    const [status, setStaus] = useState(route.params.status)


    const update = () => {
        route.params.updateProfile(name, age, gender, city, profession, status);
        AsyncStorage.setItem('name', name)
        AsyncStorage.setItem('age', age)
        AsyncStorage.setItem('gender', gender)
        AsyncStorage.setItem('city', city)
        AsyncStorage.setItem('profession', profession)
        AsyncStorage.setItem('status', status)

        navigation.goBack()
    }


    return (

        <KeyboardAwareScrollView style={[styles.container, {backgroundColor: theme.foreGroundColor}]} >
            <View style={styles.header}>
                <Text style={[styles.textHeading, {color: theme.fontColor}]}> Update Profile </Text>
                <Text style={[styles.textSubheading, {color: theme.bar.backgroundColor}]}> Update Your Profile Here </Text>
            </View>

            
            <View style={styles.fields}>
                <Text style={[styles.textSecondry, {color: theme.fontColor}] }> 
                    <MaterialCommunityIcons name='rename-box' color={theme.fontColor} size={18} />
                    {" "}NAME 
                </Text>
                <TextInput 
                    style={[styles.input, {color: theme.inputColor, borderColor: theme.bar.backgroundColor}]} 
                    value={name} 
                    onChangeText={setName}
                    />
            </View>

            <View style={styles.fields}>
                <Text style={[styles.textSecondry, {color: theme.fontColor}] }> 
                    <MaterialCommunityIcons name='calendar-account-outline' color={theme.fontColor} size={18} />
                    {" "}AGE
                </Text>
                <TextInput 
                    style={[styles.input, {color: theme.inputColor, borderColor: theme.bar.backgroundColor}]} 
                    keyboardType='number-pad'
                    value={`${age}`}
                    onChangeText={setAge}
                />
            </View>

            <View style={styles.fields}>
                <Text style={[styles.textSecondry, {color: theme.fontColor}] }> 
                    <MaterialCommunityIcons name='human' color={theme.fontColor} size={18} />
                    {" "}GENDER 
                </Text>
                <TextInput 
                    style={[styles.input, {color: theme.inputColor, borderColor: theme.bar.backgroundColor}]} 
                    value={gender}
                    onChangeText={setGender}
                    />
            </View>

        
            <View style={styles.fields}>
                <Text style={[styles.textSecondry, {color: theme.fontColor}] }> 
                    <MaterialCommunityIcons name='city-variant-outline' color={theme.fontColor} size={18} />
                    {" "}CITY/COUNTRY 
                </Text>
                <TextInput 
                    style={[styles.input, {color: theme.inputColor, borderColor: theme.bar.backgroundColor}]} 
                    value={city}
                    onChangeText={setCity}
                />
            </View>

            <View style={styles.fields}>
                <Text style={[styles.textSecondry, {color: theme.fontColor}] }> 
                    <MaterialCommunityIcons name='account-circle-outline' color={theme.fontColor} size={18} />
                    {" "}PROFESSION
                </Text>
                <TextInput 
                    style={[styles.input, {color: theme.inputColor, borderColor: theme.bar.backgroundColor}]} 
                    value={profession}
                    onChangeText={setProfession}
                />
            </View>

            <View style={styles.fields}>
                <Text style={[styles.textSecondry, {color: theme.fontColor}] }> 
                    <MaterialCommunityIcons name='book' color={theme.fontColor} size={18} />
                    {" "}STATUS
                </Text>
                <TextInput 
                    style={[styles.input, {textAlignVertical:'top', color:theme.inputColor, borderColor:theme.bar.backgroundColor}]}
                    value={status}
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={setStaus}
                    maxLength={250}
                    />
            </View>

            <Button mode="contained" color={theme.fontColor} 
                    labelStyle={{ fontSize: 14}}
                    onPress={update} >
                        Finish
            </Button>
        
    </KeyboardAwareScrollView>
        
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        elevation: 1,
    },

    input: {
        fontSize: 13,
        color: "#808080",
        margin: 5,
        borderWidth: 1,
        borderColor: "#87CCC5",
        borderRadius: 4,
        padding: 5,
    },
    
    header: {
        alignItems: 'center',
        padding: 8,
    },

    fields: {
        marginTop: 5,
        padding: 5,
    },
    form: {
        height: 630
    },

    textHeading: {
        color: "#272727",
        fontSize: 25,
        fontWeight: '800',
        fontFamily: 'sans-serif-medium',
    },
    textSubheading: {
        color: '#89CCC5',
        fontSize: 14,
        fontFamily: 'Roboto',
    },
    textPrimary: {
        paddingTop: 5,
        fontSize: 23,
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'sans-serif-medium'
    }, 
    textSecondry: {
        paddingLeft: 5,
        color: '#272727',
        fontSize: 13,
        fontFamily: 'Roboto',
    },
});


export default Status;










