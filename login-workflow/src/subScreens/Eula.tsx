/**
 * @packageDocumentation
 * @module Sub-Screens
 */

import React, { useCallback } from 'react';

// Components
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Body1 } from '@pxblue/react-native-components';
import { Checkbox } from '../components/Checkbox';
import { WebView } from 'react-native-webview';

// Hooks
import { useLanguageLocale } from '@pxblue/react-auth-shared';
import { Theme, useTheme } from 'react-native-paper';

/**
 * @ignore
 */
const makeContainerStyles = (theme: Theme): Record<string, any> =>
    StyleSheet.create({
        containerMargins: {
            marginHorizontal: 16,
            paddingTop: 16,
        },
        checkboxContainer: {
            margin: 16,
            marginLeft: 8,
            justifyContent: 'center',
            alignSelf: 'flex-start',
        },
    });

/**
 * Handle the change of the password input.
 *
 * @param eulaAccepted  (Optional) If the EULA has been accepted or not. Default false.
 * @param eulaContent  (Optional) The content of the EULA.
 * @param onEulaChanged  The function to handle when the EULA state has changed.
 * @param eulaError  The error message.
 * @param loadEula  The function to be used for loading the EULA.
 * @param htmlEula (Optional) whether the EULA should be plaintext or support HTML
 * @param theme (Optional) react-native-paper theme partial for custom styling.
 */
type EulaProps = {
    eulaAccepted?: boolean;
    eulaContent?: string;
    onEulaChanged(accepted: boolean): void;
    eulaError: string | null;
    loadEula: Function;
    htmlEula?: boolean;
    theme?: Theme;
};

/**
 * Renders the content of the EULA screen (EULA body and accept checkbox).
 *
 * @category Component
 */
export const Eula: React.FC<EulaProps> = (props) => {
    const theme = useTheme(props.theme);
    const { t } = useLanguageLocale();
    const containerStyles = makeContainerStyles(theme);
    const eulaIsChecked = props.eulaAccepted ?? false;
    const htmlEula = props.htmlEula ?? false;

    React.useEffect(() => {
        props.loadEula();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const checkedBox = useCallback(() => {
        props.onEulaChanged(!eulaIsChecked);
    }, [eulaIsChecked, props]);

    const disableCheckBox = props.eulaError || !props.eulaContent ? true : false;

    const eulaContentInternals = !htmlEula
        ? props.eulaContent ?? props.eulaError ?? t('REGISTRATION.EULA.LOADING')
        : props.eulaContent ??
        '<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>' +
        '<style>body { font-size: 120%; word-wrap: break-word; overflow-wrap: break-word; }</style>' +
        `<body>${props.eulaError ?? t('REGISTRATION.EULA.LOADING')}</body>` +
        '</html>';

    return (
        <View style={[{ height: '100%' }]}>
            <View style={{ flex: 1 }}>
                <View style={[containerStyles.containerMargins, { flex: 1 }]}>
                    {htmlEula ? (
                        <WebView
                            originWhitelist={['*']}
                            source={{ html: eulaContentInternals }}
                            style={{ flex: 1, height: 50 /* WebView needs a fixed height set or it won't render */ }}
                        />
                    ) : (
                            <ScrollView keyboardShouldPersistTaps={'always'}>
                                <Body1>{eulaContentInternals}</Body1>
                            </ScrollView>
                        )}
                </View>
                <View style={[containerStyles.checkboxContainer]}>
                    <Checkbox
                        label={t('REGISTRATION.EULA.AGREE_TERMS')}
                        disabled={disableCheckBox}
                        checked={eulaIsChecked}
                        onPress={checkedBox}
                    />
                </View>
            </View>
        </View>
    );
};
