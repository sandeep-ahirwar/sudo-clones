import React, {useState, useEffect}  from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground, Image, ActivityIndicator} from 'react-native';
import { Button, Switch } from 'react-native-paper';
import { useTheme } from '../context/ThemeProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';


const {width, height} = Dimensions.get('screen')
const image = {uri: "https://picsum.photos/id/446/600/600"}
const profileImg = {uri: "https://picsum.photos/id/447/300/300"}


const Profile = ({state, navigation}) =>  {
    const [isSwitchOn, setSwitchState] = useState(true);
    const [pageReady, setPage] = useState(false);
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);
    const [city, setCity] = useState(null);
    const [profession, setProfession] = useState(null);
    const [status, setStaus] = useState(null);

    const {theme, updateTheme} = useTheme();

    const updateProfile = (newName, newAge, newGender, newCity, newProfession, newStatus) => {
        setName(newName);
        setAge(newAge);
        setGender(newGender);
        setCity(newCity);
        setProfession(newProfession);
        setStaus(newStatus);
    }


    const getProfileDetails = async () => {
        const name = await AsyncStorage.getItem('name');
        const age = await AsyncStorage.getItem('age');
        const gender = await AsyncStorage.getItem('gender');
        const city = await AsyncStorage.getItem('city');
        const profession = await AsyncStorage.getItem('profession');
        const status = await AsyncStorage.getItem('status');

        updateProfile(name, age, gender, city, profession, status);
        setPage(true);
    }


    useEffect( () => {
        getProfileDetails();

    }, []);

    const changeTheme = () => {
        updateTheme(theme.themeMode)
    }

    const onToggleSwitch = () => {
        changeTheme();
        setSwitchState(!isSwitchOn);
    }


    if(!pageReady){
        return ( <ActivityIndicator style={styles.indicator} size="large" color={theme.bar.backgroundColor} /> )
    }

    return (
        <View style={[styles.container, {backgroundColor: theme.foreGroundColor}]}>
            <View style={styles.banner}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View style={styles.profileContainer}>
                        <Image source={profileImg}
                            style={{ width: 180, height: 180, borderRadius: 100, }}
                        />
                        <Text style={styles.textPrimary}> {name} </Text>
                        <Text style={styles.textSecondry}> {profession} | {age} </Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.about}>
                <Button mode="contained" color={theme.bar.backgroundColor} 
                    labelStyle={{ color: "#fff" }}
                    style={styles.btn}>
                        About
                </Button>

                <View style={styles.status}>
                    <Text style={[styles.textSecondry, {color:theme.fontColor}]}>
                        {city} | 🤖
                    </Text>
                    <Text style={[styles.textSecondry, {color:theme.fontColor}]}>
                        {status}
                    </Text>
                </View>

                <View style={styles.setting}>
                    <View style={styles.switchStyle}> 
                        <Text style={[styles.textSecondry, {color:theme.fontColor, fontWeight: '800',}]}> Dark Mode  </Text>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{margin:-10}} />
                    </View>
                    <Button mode="contained" color='#FF7597' 
                        labelStyle={{ fontSize: 12, color: "#F8F8F8" }}
                        onPress={() => navigation.navigate('Status', {
                            name: name,
                            age: age,
                            gender: gender,
                            city: city,
                            profession: profession,
                            status: status,
                            updateProfile: (newName, newAge, newGender, newCity, newProfession, newStatus) => updateProfile(newName, newAge, newGender, newCity, newProfession, newStatus)
                        })}
                        >
                            Update info
                    </Button>
                </View>
            </View>
            

        </View>
    );
}


const styles = StyleSheet.create({
    about: {
        position: 'absolute',
        top: 405,
        alignItems: 'center'
    },
    btn: {
        width: 140,
        paddingVertical: 2,
        paddingHorizontal: 20,
        borderRadius: 100,
    },
    banner: {
        flex: 1,
        position: 'absolute',
        height: height/2,
        width,
    },
    container: {
        flex:1, 
        alignItems:'center',
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        alignItems: 'center',
        top: 60,
    },
    setting: {
        paddingTop: 20,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },  
    switchStyle: {
        flexDirection: 'row',
    },
    status: {
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 10,
    },
    textPrimary: {
        paddingTop: 5,
        fontSize: 23,
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'sans-serif-medium'
    }, 
    textSecondry: {
        padding: 5,
        fontSize: 16,
        color: '#fff',
        fontFamily: 'sans-serif-light'
    },
    
})

export default Profile;



