import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { NavigationDrawer } from './navigation-drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import WorkFlowCardExample from '../screens/WorkFlowCardExample';
import RegistrationProviderExample from '../screens/RegistrationProviderExample';

const Drawer = createDrawerNavigator();

export type RootStackParamList = {
    Home: undefined;
    WorkFlowCardExample: undefined;
    RegistrationProviderExample: undefined;
    NavigationDrawer: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const CustomDrawerContent = (props: any): any => (
    <View style={{ height: '100%' }}>
        <NavigationDrawer {...props} />
    </View>
);

export const MainRouter = (): any => (
    <NavigationContainer>
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
            drawerContent={(props: any): ReactNode => <CustomDrawerContent {...props} />}
        >
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="WorkFlowCardExample" component={WorkFlowCardExample} />
            <RootStack.Screen name="RegistrationProviderExample" component={RegistrationProviderExample} />
        </Drawer.Navigator>
    </NavigationContainer>
);
