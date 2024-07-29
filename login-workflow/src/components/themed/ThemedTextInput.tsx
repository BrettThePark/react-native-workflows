import React, { MutableRefObject } from 'react';
import { StyleSheet, TextInput as ReactTextInput } from 'react-native';
import { MD3Theme, TextInput, useTheme } from 'react-native-paper';
import { Props as TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import _clonedeep from 'lodash.clonedeep';
import * as Colors from '@brightlayer-ui/colors';

const makeStyles = (theme: MD3Theme): Record<string, any> =>
    StyleSheet.create({
        textInput: {
            backgroundColor: theme.dark ? Colors.black[800] : Colors.white[500],
        },
    });

// eslint-disable-next-line @typescript-eslint/ban-types
const ThemedTextInputRender: React.ForwardRefRenderFunction<{}, TextInputProps> = (
    props: TextInputProps,
    ref: MutableRefObject<{} | null> | ((instance: {} | null) => void) | null // eslint-disable-line @typescript-eslint/ban-types
) => {
    const inputRef = React.useRef<ReactTextInput>(null);
    React.useImperativeHandle(ref, () => ({
        focus: (): void => {
            if (inputRef.current) inputRef.current.focus();
        },
    }));
    const { style = {}, ...otherProps } = props;
    const theme = useTheme();
    // const altTheme = useAltTheme();
    const defaultStyles = makeStyles(theme);

    // Merging blueDark colors.primary with blueDarkAlt theme so TextInput border is blueDark.colors.primary
    // const darkTheme = _clonedeep(altTheme);
    // if (darkTheme) darkTheme.colors.primary = theme.colors.primary;

    // const themeToUse = theme.dark ? Object.assign({}, darkTheme, props.theme) : {};

    return (
        <TextInput
            // @ts-ignore
            ref={inputRef}
            style={[defaultStyles.textInput, style]}
            {...otherProps}
            theme={theme}
        />
    );
};

export const ThemedTextInput = React.forwardRef(ThemedTextInputRender);
