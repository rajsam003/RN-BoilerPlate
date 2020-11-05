import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const HelloWorld = ({name}) => <SafeAreaView>
    <Text>Hello World {name}!</Text>
    </SafeAreaView>;

export default HelloWorld;