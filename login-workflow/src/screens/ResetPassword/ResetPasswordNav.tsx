/**
 * @packageDocumentation
 * @module Screens
 */

import * as React from 'react';
import { BackHandler } from 'react-native';
// Nav
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

// Hooks
import { useNavigation, useRoute } from '@react-navigation/native';

// Screens
import { ResetPassword } from '../../subScreens/ResetPassword';
import { ResetPasswordSent } from '../../subScreens/ResetPasswordSent';

// Theme
import { MD2Theme, useTheme } from 'react-native-paper';

// Shared Auth Logic
import {
    // Actions
    AccountActions,
    // Hooks
    useAccountUIState,
    useAccountUIActions,
    useLanguageLocale,
    // Types
    ContactParams
} from '../../react-auth-shared';
import { CloseHeader } from '../../components/CloseHeader';
import { StackParamList } from '../PreAuthContainer';

/**
 * Stack navigator for reset password navigation.
 */
const Stack = createStackNavigator();

/**
 * @param theme  (Optional) react-native-paper theme partial to style the component.
 */
type ResetPasswordNavProps = {
    theme?: MD2Theme;
};

/**
 * Renders a screen stack which handles the reset password flow.
 *
 * @category Component
 */
export const ResetPasswordNav: React.FC<ResetPasswordNavProps> = (props) => {
    const theme = useTheme<MD2Theme>(props.theme);
    const accountUIState = useAccountUIState();
    const accountUIActions = useAccountUIActions();
    const navigation = useNavigation<StackNavigationProp<StackParamList>>();
    const route = useRoute();
    const { t } = useLanguageLocale();

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
                cardStyle: { backgroundColor: theme.colors.surface },
                header: (): JSX.Element | null => (
                    <CloseHeader
                        title={t('blui:FORMS.RESET_PASSWORD')}
                        backAction={(): void => {
                            navigation.navigate('Login');
                        }}
                    />
                ),
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
