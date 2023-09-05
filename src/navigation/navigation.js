
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import Library from '../Library';
import Account from '../Account';
import Home from '../Home';
// import LoginScreen from '../LoginScreen';

const HomeTabs = createBottomTabNavigator();



const MyStack = () => {
    return (

        <NavigationContainer
            independent={true}
        >
            <HomeTabs.Navigator
                initialRouteName='Home'
            >
                <HomeTabs.Screen
                    options={{
                        tabBarLabelStyle: {
                            color: 'black',
                            fontSize: 14,
                            fontWeight: 'bold'
                        }
                    }}
                    name="Home" component={Home} />
                <HomeTabs.Screen
                    options={{
                        tabBarLabelStyle: {
                            color: 'black',
                            fontSize: 14,
                            fontWeight: 'bold'
                        }
                    }}
                    name="Library" component={Library} />
                <HomeTabs.Screen
                    options={{
                        tabBarLabelStyle: {
                            color: 'black',
                            fontSize: 14,
                            fontWeight: 'bold'
                        }
                    }}
                    name="Account" component={Account} />
            </HomeTabs.Navigator>
        </NavigationContainer>
    );
};

export default MyStack