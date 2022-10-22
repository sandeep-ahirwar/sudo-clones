import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './bottomTab/TabBar';

import Home from './Home/home';
import ProfileStack from './Profile/ProfileStack';
import ThemeProvider from './context/ThemeProvider';
import ThemeWrapper from './context/themeWrapper';
import CustomStatusBar from './context/CustomStatusBar';


// Bottom nativator start point of the App..
const Tab = createBottomTabNavigator();

const Main = () => {

  return (
    <ThemeProvider>
      <ThemeWrapper>
        <CustomStatusBar />
          <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false }} tabBar={(props) => <TabBar {...props} />} >

              <Tab.Screen name='Home' component={Home} initialParams = {{icon:'home-outline'}} />
              <Tab.Screen name='ProfileStack' component={ProfileStack} initialParams = {{icon:'account-outline'}}/>

            </Tab.Navigator>
          </NavigationContainer>
      </ThemeWrapper>
    </ThemeProvider>

  )
}


export default Main;

