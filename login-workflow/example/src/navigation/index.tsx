import React, { ReactNode } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { NavDrawerProps, NavigationDrawer } from './navigation-drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import PageOne from '../screens/pageOne';
import PageTwo from '../screens/pageTwo';
import { useTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

export type RootStackParamList = {
    Home: undefined;
    PageOne: undefined;
    PageTwo: undefined;
    NavigationDrawer: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const CustomDrawerContent = (props: any): any => (
    <View style={{ height: '100%' }}>
        <NavigationDrawer {...props} />
    </View>
);

export const MainRouter = (): any => {
    const theme = useTheme();
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{ backgroundColor: 'transparent', width: '80%' }}
            sceneContainerStyle={{ backgroundColor: theme.colors.background }}
            // @ts-ignore
            drawerContent={(props: NavDrawerProps): ReactNode => <CustomDrawerContent {...props} />}
        >
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="PageOne" component={PageOne} />
            <RootStack.Screen name="PageTwo" component={PageTwo} />
        </Drawer.Navigator>
    );
};
