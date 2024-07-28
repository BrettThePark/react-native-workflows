/**
 * @packageDocumentation
 * @module Components
 */

import React from 'react';

// Hooks
import { useLanguageLocale } from '../react-auth-shared';

// Components
import { EmptyState, Hero } from '@brightlayer-ui/react-native-components';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme, Button, MD2Theme } from 'react-native-paper';
// import { ThemedButton as Button } from '@brightlayer-ui/react-native-components/themed';

// const ReportIcon: IconFamily = { name: 'report' };

/**
 * @ignore
 */
const makeContainerStyles = (): Record<string, any> =>
    StyleSheet.create({
        containerMargins: {
            marginHorizontal: 16,
        },
        spaceBetween: {
            flexGrow: 1,
            justifyContent: 'space-between',
        },
    });

/**
 * @ignore
 */
const makeStyles = (): Record<string, any> =>
    StyleSheet.create({
        sideBySideButtons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 8,
        },
    });

/**
 * @param title  The title to show on the error state.
 * @param bodyText  The body text to show on the error state.
 * @param icon  (Optional) The icon to show at the top of the error state. Icon 'report' is used if none is specified.
 * @param onPress  The function to handle the on press action.
 * @param theme (Optional) react-native-paper theme partial to style the component.
 */
type ErrorStateProps = {
    title: string;
    bodyText: string | null;
    icon?: React.Component<{ size: number; color: string }>;
    onPress: () => void;
    theme?: MD2Theme;
};

/**
 * Renders the content of the notice of completed account creation / password reset screen.
 *
 * @category Component
 */
export const ErrorState: React.FC<ErrorStateProps> = (props) => {
    const theme = useTheme<MD2Theme>(props.theme);
    const { title, bodyText, icon, onPress } = props;
    const { t } = useLanguageLocale();

    const containerStyles = makeContainerStyles();
    const styles = makeStyles();

    return (
        <SafeAreaView style={[containerStyles.spaceBetween, { backgroundColor: theme.colors.surface }]}>
            <View style={{ flex: 1 }}>
                <EmptyState
                    // @ts-ignore we need a new version of the component library that exposes the type for WrapIconProps
                    IconClass={icon ?? <Hero label={''} icon={{ family: 'brightlayer-ui', name: 'report' }} />}
                    iconColor={theme.colors.error}
                    title={title ?? t('blui:MESSAGES.FAILURE')}
                    description={bodyText !== null ? t(bodyText) : t('blui:MESSAGES.REQUEST_ERROR')}
                />
            </View>

            <View style={[styles.sideBySideButtons, containerStyles.containerMargins]}>
                <Button
                    uppercase={false}
                    style={{ width: '100%', alignSelf: 'flex-end' }}
                    mode={'contained'}
                    onPress={(): void => {
                        onPress();
                    }}
                >
                    {t('blui:ACTIONS.FINISH')}
                </Button>
            </View>
        </SafeAreaView>
    );
};
