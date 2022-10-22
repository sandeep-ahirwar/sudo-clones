import React, {useState, memo} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeProvider';

const {width} = Dimensions.get('window')
const ratio = width/200;

const Post = (props) => {
    const {theme} = useTheme();
    const [imgLoading, setImageLoading] = useState(true);
    const image = {uri: props.url}


    return (
        <View style={[styles.container, {backgroundColor: theme.foreGroundColor}]}>

            <View style={styles.title}>
                <Text style={[styles.texts, {color: theme.fontColor}]}> {props.title} </Text>
            </View>

            {imgLoading ? <ActivityIndicator style={styles.indicator} size="large" color={theme.bar.backgroundColor} /> : null}
            <Image 
                source={image}
                onLoadStart={() => setImageLoading(true)}
                onLoadEnd={() => setImageLoading(false)}
                style={styles.image}
            />

            <View style={styles.footer}>
                <View style={styles.field}>
                    <MaterialCommunityIcons name='account-tie' color={theme.iconColor} size={19} />
                    <Text style={[styles.footerText, {color: theme.fontColor}]}> {props.author} </Text>
                </View>

                <View style={styles.field}>
                    <MaterialCommunityIcons name='arrow-up-bold' color={theme.iconColor} size={20} />
                    <Text style={[styles.footerText, {color: theme.fontColor}]}> {props.ups} </Text>
                </View>

                <View style={styles.field}>
                    <MaterialCommunityIcons name='reddit' color="#ff4301" size={20} />
                    <Text style={[styles.footerText, {color: theme.fontColor}]}> {props.subreddit} </Text>
                </View>
            </View>

        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        margin: 5,
        marginVertical: 10,
        borderRadius: 5,
        elevation: 4,
    }, 
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 8,
    },  
    postBanner: {
        height: 300,
    },
    image: {
        width:'100%',
        height:200*ratio,
        resizeMode:'contain' 
    },
    indicator: {
        position: 'absolute',
        right: 180,
        top: 170,
    },  

    footerText: {
        fontSize: 12,
        fontFamily: 'sans-serif',
    }, 
    field: {
        flexDirection: 'row',
        alignItems: 'center',
    },  
    texts: {
        fontFamily: 'sans-serif',
        fontSize: 16,
    },
    title: {
        padding: 5,
        paddingVertical: 10,
    }
})


export default memo(Post);

