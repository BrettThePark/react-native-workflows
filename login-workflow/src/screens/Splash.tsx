/**
 * @packageDocumentation
 * @module Screens
 */

import React from 'react';

// Components
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { LoginHeaderSplash } from '../components/LoginHeaderSplash';
import { Theme, useTheme } from 'react-native-paper';

// Styles
import * as Colors from '@pxblue/colors';
// @ts-ignore
import CyberLogo from '../assets/images/cybersecurity_certified.png';

/**
 * @ignore
 */
const makeContainerStyles = (theme: Theme): Record<string, any> =>
    StyleSheet.create({
        safeContainer: {
            height: '100%',
            backgroundColor: theme.colors.surface,
            justifyContent: 'center',
        },
    });

/**
 * @ignore
 */
const makeStyles = (): Record<string, any> =>
    StyleSheet.create({
        logoCyber: {
            height: 85,
            width: '100%',
            marginTop: 32,
        },
        svg: {
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
        },
    });

/**
 * Type for the properties of [[Splash]].
 *
 * @param mainImage (Optional) The top splash image.
 * @param theme (Optional) react-native-paper theme partial for custom styling.
 */

type SplashProps = {
    mainImage?: string | number;
    theme?: Theme;
};

/**
 * A splash area to be used on the top of a screen. Has a faint textured background and a mainImage.
 *
 * @category Component
 */
export const Splash: React.FC<SplashProps> = (props) => {
    const theme = useTheme(props.theme);
    const containerStyles = makeContainerStyles(theme);
    const styles = makeStyles();

    return (
        <SafeAreaView style={containerStyles.safeContainer}>
            <LoginHeaderSplash style={{ alignItems: 'center' }} mainImage={props.mainImage} />

            <View>
                <View style={styles.logoCyber}>
                    <Image resizeMethod="resize" source={CyberLogo} style={styles.svg} />
                </View>
            </View>
        </SafeAreaView>
    );
};
