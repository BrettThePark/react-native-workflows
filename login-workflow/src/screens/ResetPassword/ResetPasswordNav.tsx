/**
 * @packageDocumentation
 * @module Screens
 */

import * as React from 'react';
import { BackHandler } from 'react-native';
// Nav
import { createStackNavigator } from '@react-navigation/stack';

// Hooks
import { useNavigation, useRoute } from '@react-navigation/native';

// Screens
import { ResetPassword } from '../../subScreens/ResetPassword';
import { ResetPasswordSent } from '../../subScreens/ResetPasswordSent';

// Components
import { CloseHeader } from '../../components/CloseHeader';

// Theme
import { useTheme } from 'react-native-paper';

// Shared Auth Logic
import {
    // Actions
    AccountActions,
    // Types
    ContactParams,
    // Hooks
    useAccountUIState,
    useAccountUIActions,
    useLanguageLocale,
} from '@pxblue/react-auth-shared';

/**
 * Stack navigator for reset password navigation.
 */
const Stack = createStackNavigator();

/**
 * @param theme  (Optional) react-native-paper theme partial to style the component.
 */
type ResetPasswordNavProps = {
    theme?: ReactNativePaper.Theme;
};

/**
 * Renders a screen stack which handles the reset password flow.
 *
 * @category Component
 */
export const ResetPasswordNav: React.FC<ResetPasswordNavProps> = (props) => {
    const { t } = useLanguageLocale();
    const theme = useTheme(props.theme);
    const accountUIState = useAccountUIState();
    const accountUIActions = useAccountUIActions();
    const navigation = useNavigation();
    const route = useRoute();

    // Reset state on dismissal
    React.useEffect(
        () => (): void => {
            accountUIActions.dispatch(AccountActions.resetPasswordReset());
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const resetPassword = (emailInput: string): void => {
        void accountUIActions.actions.forgotPassword(emailInput);
    };

    const routeParams = route.params as ContactParams;
    const contactPhone = routeParams?.contactPhone ?? '';

    // Navigate appropriately with the hardware back button on android
    React.useEffect(() => {
        const onBackPress = (): boolean => {
            navigation.navigate('Login');
            return true;
        };
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return (): void => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: theme.colors.surface,
                headerStyle: { backgroundColor: theme.colors.primaryBase || theme.colors.primary },
                header: (): JSX.Element | null => (
                    <CloseHeader
                        title={t('pxb:FORMS.RESET_PASSWORD')}
                        backAction={(): void => {
                            navigation.navigate('Login');
                        }}
                    />
                ),
                cardStyle: { backgroundColor: theme.colors.surface },
            }}
        >
            {accountUIState.forgotPassword.transitSuccess !== true ? (
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    initialParams={{ onResetPasswordPress: resetPassword, contactPhone: contactPhone }}
                />
            ) : (
                <Stack.Screen
                    name="ResetPasswordSent"
                    component={ResetPasswordSent}
                    initialParams={{ email: accountUIState.forgotPassword.email }}
                />
            )}
        </Stack.Navigator>
    );
};
