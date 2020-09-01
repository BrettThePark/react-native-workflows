/**
 * @packageDocumentation
 * @module Components
 */

import React from 'react';

// Components
import { View, Image, StyleSheet, StyleProp, ViewStyle, SafeAreaView } from 'react-native';

// Styles
import * as Colors from '@pxblue/colors';

/**
 * @ignore
 */
const makeStyles = (): Record<string, any> =>
    StyleSheet.create({
        headerImageContainer: {
            width: '70%',
            maxWidth: 253, // these dimensions are based on the required aspect ratio specified in the docs
            height: 72, // we can't auto-resize and left-align the image without specifying the dimensions
            justifyContent: 'center',
        },
        headerImage: {
            width: '100%',
            resizeMode: 'contain',
        },
    });

/**
 * @param style  (Optional) Custom style to style the login header splash.
 * @param mainImage  (Optional) The image to show in the login header splash. Default 'eaton_stacked_logo.png'.
 */
type LoginHeaderSplashProps = {
    style?: StyleProp<ViewStyle>;
    mainImage?: number | string;
};

/**
 * A component used for a header area which contains a large image.
 *
 * @category Component
 */
export const LoginHeaderSplash: React.FC<LoginHeaderSplashProps> = (props) => {
    const { style, mainImage } = props;
    const styles = makeStyles();

    return (
        <View style={style}>
            <View style={[styles.headerImageContainer]}>
                <Image
                    resizeMethod="resize"
                    source={mainImage ?? require('../assets/images/eaton_stacked_logo.png')}
                    style={styles.headerImage}
                />
            </View>
        </View>
    );
};
