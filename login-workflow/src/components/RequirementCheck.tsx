/**
 * @packageDocumentation
 * @module Components
 */

import React from 'react';

import { View, StyleSheet } from 'react-native';
import { MD2Theme, useTheme } from 'react-native-paper';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

// Styles
import * as Colors from '@brightlayer-ui/colors';
import { Subtitle2 } from './BrightlayerTypographyWrappers';

/**
 * @ignore
 */
const makeStyles = (): Record<string, any> =>
    StyleSheet.create({
        itemContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        text: {
            paddingLeft: 8,
        },
    });

/**
 * @param isChecked  If the requirement is met / a check mark is shown.
 * @param text  The text to show next to the check mark.
 * @param theme (Optional) react-native-paper theme partial to style the component.
 */
type RequirementCheckProps = {
    isChecked: boolean;
    text: string;
    theme?: MD2Theme;
};

/**
 * Creates a component consisting of a check mark and a string next to it.
 * Will be colored if checked and grayed out if not.
 *
 * @category Component
 */
export const RequirementCheck: React.FC<RequirementCheckProps> = (props) => {
    const { isChecked, text } = props;
    const theme = useTheme<MD2Theme>(props.theme);
    const styles = makeStyles();

    function colorIfValid(valid: boolean): string {
        return valid ? theme.colors.primary : theme.dark ? Colors.black[500] : Colors.gray[200];
    }

    return (
        <View style={styles.itemContainer}>
            <MatIcon name={'check'} size={24} color={colorIfValid(isChecked)} />
            {/* TODO: <Subtitle2 variant={'regular'} style={styles.text}>  */}
            <Subtitle2 style={styles.text}> 
                {text}
            </Subtitle2>
        </View>
    );
};
