/**
 * @packageDocumentation
 * @module Sub-Screens
 */

import React from 'react';

// Components
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { CompleteSplashScreen } from './CompleteSplash';
import { ToggleButton } from '../components/ToggleButton';

// Hooks
import { useNavigation } from '@react-navigation/native';
import { useLanguageLocale } from '@pxblue/react-auth-shared';
import { Theme, useTheme } from 'react-native-paper';

/**
 * @ignore
 */
const makeContainerStyles = (theme: Theme): Record<string, any> =>
    StyleSheet.create({
        safeContainer: {
            flex: 1,
            backgroundColor: theme.colors.surface,
        },
        buttonContainer: {
            zIndex: 2,
            margin: 16,
        },
    });

/**
 * Handle the props for the Reset Password Success page.
 *
 * @param theme (Optional) react-native-paper theme partial for custom styling.
 */
type ResetPasswordSuccessProps = {
    theme?: Theme;
};

/**
 * Renders the content of the notice of completed password reset screen.
 *
 * @category Component
 */
export const ResetPasswordSuccess: React.FC<ResetPasswordSuccessProps> = (props) => {
    const theme = useTheme(props.theme);
    const { t } = useLanguageLocale();
    const navigation = useNavigation();

    const containerStyles = makeContainerStyles(theme);

    const titleText = t('PASSWORD_RESET.SUCCESS_MESSAGE');
    const bodyText = t('CHANGE_PASSWORD.SUCCESS_MESSAGE');

    return (
        <SafeAreaView style={containerStyles.safeContainer}>
            <CompleteSplashScreen style={{flex: 1}} boldTitle={titleText} bodyText={bodyText} icon={'vpn-key'} />

            <View style={containerStyles.buttonContainer}>
                <ToggleButton
                    text={t('ACTIONS.DONE')}
                    onPress={(): void => navigation.navigate('Login')}
                />
            </View>
        </SafeAreaView>
    );
};
