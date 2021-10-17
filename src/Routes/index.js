import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/TodoListScreen/HomeScreen';
import LoguinScreen from '../views/TodoListScreen/LoguinScreen';

const Routes = () => {
    const Stack = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoguinScreen}></Stack.Screen>
                <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;