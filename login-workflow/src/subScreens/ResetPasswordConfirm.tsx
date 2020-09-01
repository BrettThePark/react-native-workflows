/**
 * @packageDocumentation
 * @module Sub-Screens
 */

import React from 'react';

// Hooks
import { useRoute } from '@react-navigation/native';
import { Theme, useTheme } from 'react-native-paper';

// Components
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { CreatePassword } from './CreatePassword';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Spinner } from '../components/Spinner';
import { SimpleDialog } from '../components/SimpleDialog';
import { ToggleButton } from '../components/ToggleButton';

// Shared Auth Logic
import {
    // Hooks
    useLanguageLocale,
    useAccountUIState,
} from '@pxblue/react-auth-shared';

/**
 * @ignore
 */
const makeContainerStyles = (theme: Theme): Record<string, any> =>
    StyleSheet.create({
        safeContainer: {
            flexGrow: 1,
            backgroundColor: theme.colors.surface,
        },
        containerMargins: {
            marginHorizontal: 16,
        },
        spaceBetween: {
            flexGrow: 1,
            justifyContent: 'space-between',
        },
        bottomButton: {
            backgroundColor: theme.colors.surface,
            paddingTop: 10,
        },
    });

/**
 * @ignore
 */
const makeStyles = (): Record<string, any> =>
    StyleSheet.create({
        bottomButton: {
            margin: 16,
        },
    });

/**
 * Handle the press of the reset password button
 *
 * @param onResetPasswordPress   Handle the press of the reset password button.
 */
type ResetPasswordConfirmParams = {
    onResetPasswordPress: Function;
};

/**
 * Handle the props for the Reset Password Confirm page.
 *
 * @param theme (Optional) react-native-paper theme partial for custom styling.
 */
type ResetPasswordConfirmProps = {
    theme?: Theme;
};

/**
 * Renders the screen with the reset password confirmation message
 * (contains 2 password inputs).
 *
 * @category Component
 */
export const ResetPasswordConfirm: React.FC<ResetPasswordConfirmProps> = (props) => {
    const theme = useTheme(props.theme);
    const [password, setPassword] = React.useState('');
    const [hasAcknowledgedError, setHasAcknowledgedError] = React.useState(false);
    const { t } = useLanguageLocale();
    const authUIState = useAccountUIState();
    const route = useRoute();
    const routeParams = route.params as ResetPasswordConfirmParams;

    const containerStyles = makeContainerStyles(theme);
    const styles = makeStyles();

    // Network state (setPassword)
    const setPasswordTransit = authUIState.setPassword.setPasswordTransit;
    const setPasswordIsInTransit = setPasswordTransit.transitInProgress;
    const setPasswordHasTransitError = setPasswordTransit.transitErrorMessage !== null;
    const setPasswordTransitErrorMessage = setPasswordTransit.transitErrorMessage;

    const onResetPasswordTap = (): void => {
        setHasAcknowledgedError(false);
        routeParams.onResetPasswordPress(password);
    };

    const spinner = setPasswordIsInTransit ? <Spinner /> : <></>;
    const canProgress = (): boolean => password.length > 0;
    const errorDialog = (
        <SimpleDialog
            title={t('MESSAGES.ERROR')}
            bodyText={t(setPasswordTransitErrorMessage ?? '')}
            visible={setPasswordHasTransitError && !hasAcknowledgedError}
            onDismiss={(): void => {
                setHasAcknowledgedError(true);
            }}
        />
    );
    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} contentContainerStyle={{ flexGrow: 1 }}>

            <SafeAreaView style={containerStyles.safeContainer}>
                {spinner}
                {errorDialog}

                <CreatePassword onPasswordChanged={setPassword} style={{ flex: 1 }} />
                <View style={styles.bottomButton}>
                    <ToggleButton
                        text={t('FORMS.RESET_PASSWORD')}
                        disabled={!canProgress()}
                        onPress={onResetPasswordTap}
                    />
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
};
