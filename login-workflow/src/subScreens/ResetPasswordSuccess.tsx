/**
 * @packageDocumentation
 * @module Sub-Screens
 */

import React from 'react';

// Components
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { CompleteSplashScreen } from './CompleteSplash';
import { ToggleButton } from '../components/ToggleButton';
import { CloseHeader } from '../components/CloseHeader';
// Hooks
import { useNavigation } from '@react-navigation/native';
import { useLanguageLocale } from '../react-auth-shared';
import { MD2Theme, useTheme } from 'react-native-paper';
import * as Colors from '@brightlayer-ui/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from 'src/screens/PreAuthContainer';

/**
 * @ignore
 */
const makeContainerStyles = (theme: MD2Theme): Record<string, any> =>
    StyleSheet.create({
        safeContainer: {
            // height: '100%',
            flex: 1,
            backgroundColor: theme.colors.surface,
        },
        mainContainer: {
            flex: 1,
            zIndex: 2,
        },
        containerMargins: {
            marginHorizontal: 16,
        },
        buttonContainer: {
            bottom: 48,
            zIndex: 2,
            width: '90%',
            marginHorizontal: '5%',
        },
    });

/**
 * Handle the props for the Reset Password Success page.
 *
 * @param theme (Optional) react-native-paper theme partial for custom styling.
 */
type ResetPasswordSuccessProps = {
    theme?: MD2Theme;
};

/**
 * Renders the content of the notice of completed password reset screen.
 *
 * @category Component
 */
export const ResetPasswordSuccess: React.FC<ResetPasswordSuccessProps> = (props) => {
    const theme = useTheme<MD2Theme>(props.theme);
    const { t } = useLanguageLocale();
    const navigation = useNavigation<StackNavigationProp<StackParamList>>();

    const containerStyles = makeContainerStyles(theme);

    const titleText = t('blui:PASSWORD_RESET.SUCCESS_MESSAGE');
    const bodyText = t('blui:CHANGE_PASSWORD.SUCCESS_MESSAGE');

    return (
        <View style={{ height: '100%' }}>
            <CloseHeader
                title={t('blui:FORMS.RESET_PASSWORD')}
                backAction={(): void => navigation.navigate('Login')}
                backgroundColor={
                    (theme.dark ? Colors.blue[500] : theme.colors.primary) || theme.colors.primary
                }
            />
            <SafeAreaView style={containerStyles.safeContainer}>
                <CompleteSplashScreen boldTitle={titleText} bodyText={bodyText} icon={'vpn-key'} />

                <ToggleButton
                    text={t('blui:ACTIONS.DONE')}
                    style={containerStyles.buttonContainer}
                    onPress={(): void => navigation.navigate('Login')}
                />
            </SafeAreaView>
        </View>
    );
};
