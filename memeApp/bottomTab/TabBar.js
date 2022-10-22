import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, Dimensions, Keyboard} from "react-native";
import Tabs from "./Tabs";
import { useTheme } from "../context/ThemeProvider";

const {width} = Dimensions.get('screen');

const TabBar = ({state, navigation}) => {
    const [selectedTab, setSelectedTab] = useState('Home');
    const [visible, setVisible] = useState(true);
    const {theme} = useTheme();


    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
          setVisible(false);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
          setVisible(true);
        });
    
        return () => {
          showSubscription.remove();
          hideSubscription.remove();
        };
      }, []);


    const handlePress = (activeTab) => {
        if(activeTab !== selectedTab){
            setSelectedTab(activeTab)
            navigation.navigate(activeTab)
        }
    }

    const renderColor = (tab) => {
        return tab === selectedTab ? theme.bar.active : theme.bar.inActive
    }

    return visible && (
        <View style={styles.wrapper}>
            <View style={[styles.container, {backgroundColor: theme.bar.backgroundColor}]}>
                { state.routes.map(route => <Tabs 
                                            tab={route}
                                            icon={route.params.icon}
                                            onPress={() => handlePress(route.name)}
                                            color={renderColor(route.name)}
                                            key={route.key} />
                                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 10,
        height: 50,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        borderRadius: 100,
        elevation: 4,
    }
})

export default TabBar;

