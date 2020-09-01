/**
 * @packageDocumentation
 * @module Sub-Screens
 */

import React from 'react';

// Components
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput } from '../components/TextInput';
import { Instruction } from '../components/Instruction';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Theme, useTheme, Button } from 'react-native-paper';

// Shared Auth Logic
import {
    // Constants
    EMAIL_REGEX,
    // Hooks
    useLanguageLocale,
} from '@pxblue/react-auth-shared';

/**
 * @ignore
 */
const makeContainerStyles = (theme: Theme): Record<string, any> =>
    StyleSheet.create({
        containerMargins: {
            marginHorizontal: 16,
        },
    });

/**
 * Handle the change of any of the email inputs.
 *
 * @param onEmailChanged  Handle the change of any of the email inputs.
 * @param theme (Optional) react-native-paper theme partial for custom styling.
 */
type CreateAccountProps = {
    onEmailChanged(email: string): void;
    theme?: Theme;
};

/**
 * Regular expression used to validate email.
 */
const emailRegex = new RegExp(EMAIL_REGEX);

/**
 * Returns true if the email is valid against the emailRegext
 */
function isValidEmail(text: string): boolean {
    return emailRegex.test(text);
}

/**
 * Renders the content of the Create Account screen (input for email).
 *
 * @category Component
 */
export const CreateAccount: React.FC<CreateAccountProps> = (props) => {
    const theme = useTheme(props.theme);
    const [emailInput, setEmailInput] = React.useState('');
    const { t } = useLanguageLocale();

    const containerStyles = makeContainerStyles(theme);
    const onChangeText = (text: string): void => {
        setEmailInput(text);
        const validEmailOrEmpty = isValidEmail(text) ? text : '';
        props.onEmailChanged(validEmailOrEmpty);
    };

    const showEmailError = emailInput.length !== 0 && !isValidEmail(emailInput);

    return (
        <View style={{ height: '100%', backgroundColor: 'gray' }}>
            <Instruction
                style={{ marginHorizontal: 16 }}
                text={t('SELF_REGISTRATION.VERIFY_EMAIL.MESSAGE')}
            />

            <View style={[{ marginHorizontal: 16, flex: 1, marginBottom: 32 }]}>
                {/* <TextInput
                    label={t('SELF_REGISTRATION.VERIFY_EMAIL.VERIFICATION')}
                    value={'verifyCode'}
                    keyboardType={'default'}
                    autoCapitalize={'none'}
                    // onChangeText={setVerifyCode}
                    style={{ marginBottom: 32 }}
                /> */}
                <TextInput
                    label={t('LABELS.EMAIL')}
                    value={emailInput}
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    error={showEmailError}
                    errorText={t('MESSAGES.EMAIL_ENTRY_ERROR')}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
        // <View style={{height: '100%'}}>
        //     <Instruction style={[containerStyles.containerMargins]} text={t('SELF_REGISTRATION.INSTRUCTIONS')} />
        //     <View style={[containerStyles.containerMargins, { flex: 1, marginBottom: 32 }]}>
        // <TextInput
        //     label={t('LABELS.EMAIL')}
        //     value={emailInput}
        //     keyboardType={'email-address'}
        //     autoCapitalize={'none'}
        //     error={showEmailError}
        //     errorText={t('MESSAGES.EMAIL_ENTRY_ERROR')}
        //     onChangeText={onChangeText}
        // />
        //     </View>
        // </View>
    );
};
