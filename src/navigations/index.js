import React from 'react';
import {NavigationContainer} from "@react-navigation/native";

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const RootNavigator = () => {
    const isAuth = false

    return (
        <NavigationContainer>
            { isAuth && <AppNavigator/>}
            { !isAuth && <AuthNavigator/>}
        </NavigationContainer>
    );
};
export default RootNavigator;