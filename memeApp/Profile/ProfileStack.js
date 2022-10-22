import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "./profile";
import Status from "./Status";

const stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <stack.Navigator screenOptions={{headerTransparent: true, title: "", headerTintColor: '#ff0266'}}>
            <stack.Screen name='Profile' component={Profile} />
            <stack.Screen name='Status' component={Status} />
        </stack.Navigator>
    );
}


export default ProfileStack;

