/**
 * @packageDocumentation
 * @module Screens
 */

import * as React from 'react';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

// Nav
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator, type NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

// Screens / Stacks
import { Login } from './Login';
import { ResetPasswordNav } from './ResetPassword/ResetPasswordNav';
import { ResetPasswordHandleDeepLink, ResetPasswordHandleDeepLinkParams } from './ResetPassword/ResetPasswordHandleDeepLink';
import { InviteRegistrationPager, InviteRegistrationPagerParams } from './InviteRegistrationPager';
import { SelfRegistrationPager, SelfRegistrationPagerParams } from './SelfRegistrationPager';
import { ContactSupport } from './ContactSupport';
import { useInjectedUIContext, ContactParams } from '../react-auth-shared';
import { MD2Theme, useTheme } from 'react-native-paper';

/**
 * @param theme (Optional) react-native-paper theme partial to style the component.
 * @param extraRoutes (Optional) array of additional screens to be available before authenticating.
 * @param initialRouteName (Optional) default route to load in the PreAuthContainer.
 */
type PreAuthContainerProps = {
    theme?: MD2Theme;
    extraRoutes?: JSX.Element;
    initialRouteName?: string;
};

export type StackParamList = {
    Login: undefined;
    PasswordResetInitiation: ContactParams | undefined;
    PasswordResetCompletion: ResetPasswordHandleDeepLinkParams;
    RegistrationInvite: InviteRegistrationPagerParams;
    SupportContact: ContactParams | undefined;
    Registration: SelfRegistrationPagerParams | undefined;
};

export type LoginScreenProps = NativeStackScreenProps<StackParamList, 'Login'>;
export type PasswordResetInitiationScreenProps = NativeStackScreenProps<StackParamList, 'PasswordResetInitiation'>;
export type PasswordResetCompletionScreenProps = NativeStackScreenProps<StackParamList, 'PasswordResetCompletion'>;
export type RegistrationInviteScreenProps = NativeStackScreenProps<StackParamList, 'RegistrationInvite'>;
export type SupportContactScreenProps = NativeStackScreenProps<StackParamList, 'SupportContact'>;
export type RegistrationScreenProps = NativeStackScreenProps<StackParamList, 'Registration'>;

/**
 * @ignore
 */
const Stack = createNativeStackNavigator<StackParamList>();

/**
 * Container wrapping status bar and theming customizations to a top-level Stack Navigator which governs access
 * to the login screen, contact screen, reset password flows, and registration flows.
 *
 * @category Component
 */
export const PreAuthContainer: React.FC<PreAuthContainerProps> = (props) => {
    // const authProps = useInjectedUIContext();
    const theme = useTheme<MD2Theme>(props.theme);
    const {
        contactEmail = 'exampleSupport@eaton.com',
        contactPhone = '1-888-EXA-TEST',
        contactPhoneLink = '1-888-EXA-TEST',
        enableResetPassword = true,
        showContactSupport = true,
        enableInviteRegistration = true,
        showSelfRegistration = true,
    } = useInjectedUIContext();

    void MatIcon.loadFont();
    return (
        <SafeAreaProvider style={{ backgroundColor: theme.colors.background }}>
            <Stack.Navigator
                initialRouteName={'Login'}
                screenOptions={{ headerShown: false }}
                // mode="modal"
                // headerMode={'none'}
                // screenOptions={{
                    // cardStyle: { backgroundColor: theme.colors.background },
                // }}
            >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                {enableResetPassword && (
                    <Stack.Screen
                        name="PasswordResetInitiation"
                        component={ResetPasswordNav}
                        options={{ headerShown: false }}
                        initialParams={{
                            contactEmail,
                            contactPhone,
                        }}
                    />
                )}
                {enableResetPassword && (
                    <Stack.Screen
                        name="PasswordResetCompletion"
                        component={ResetPasswordHandleDeepLink}
                        options={{ headerShown: false }}
                    />
                )}
                {enableInviteRegistration && (
                    <Stack.Screen
                        name="RegistrationInvite"
                        component={InviteRegistrationPager}
                        options={{ headerShown: false }}
                    />
                )}
                {showContactSupport && (
                    <Stack.Screen
                        name="SupportContact"
                        component={ContactSupport}
                        options={{ headerShown: false }}
                        initialParams={{
                            contactEmail,
                            contactPhone,
                            contactPhoneLink,
                        }}
                    />
                )}
                {showSelfRegistration && (
                    <Stack.Screen
                        name="Registration"
                        component={SelfRegistrationPager}
                        options={{ headerShown: false }}
                    />
                )}
                {props.extraRoutes}
            </Stack.Navigator>
        </SafeAreaProvider>
    );
};
