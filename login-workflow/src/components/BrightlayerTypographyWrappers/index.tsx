/**
 * @packageDocumentation
 * @module Components
 */

import * as React from 'react';
import { Text, TextProps } from 'react-native-paper';
import { TextRef } from 'react-native-paper/lib/typescript/components/Typography/Text';

export const H1: React.FC<TextProps<'displayLarge'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'displayLarge'} style={{ fontSize: 96, letterSpacing: 0   }} {...props}>
        {props.children}
    </Text>
);

export const H2: React.FC<TextProps<'displayMedium'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'displayMedium'} style={{ fontSize: 60 }} {...props}>
        {props.children}
    </Text>
);

export const H3: React.FC<TextProps<'displaySmall'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'displaySmall'} style={{ fontSize: 48 }} {...props}>
        {props.children}
    </Text>
);

export const H4: React.FC<TextProps<'headlineLarge'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'headlineLarge'} style={{ fontSize: 34 }} {...props}>
        {props.children}
    </Text>
);

export const H5: React.FC<TextProps<'headlineMedium'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'headlineMedium'} style={{ fontSize: 24 }} {...props}>
        {props.children}
    </Text>
);

export const H6: React.FC<TextProps<'headlineSmall'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'headlineSmall'} style={{ fontSize: 20, fontWeight: '600' }} {...props}>
        {props.children}
    </Text>
);

export const Body1: React.FC<TextProps<'bodyLarge'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'bodyLarge'} style={{ letterSpacing: 0 }} {...props}>
        {props.children}
    </Text>
);

export const Body2: React.FC<TextProps<'bodyMedium'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'bodyMedium'} {...props}>
        {props.children}
    </Text>
);

export const Label: React.FC<TextProps<'bodyLarge'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'bodyLarge'} style={{ letterSpacing: 0 }} {...props}>
        {props.children}
    </Text>
);

export const Subtitle1: React.FC<TextProps<'titleMedium'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'titleMedium'} style={{ letterSpacing: 0 }} {...props}>
        {props.children}
    </Text>
);

export const Subtitle2: React.FC<TextProps<'titleSmall'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'titleSmall'} style={{ letterSpacing: 0 }} {...props}>
        {props.children}
    </Text>
);

export const Button: React.FC<TextProps<'labelLarge'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'labelLarge'} style={{ letterSpacing: 0 }} {...props}>
        {props.children}
    </Text>
);

export const Caption: React.FC<TextProps<'bodySmall'> & { ref?: React.RefObject<TextRef> }> = (props) => (
    <Text variant={'bodySmall'} style={{ letterSpacing: 0 }} {...props}>
        {props.children}
    </Text>
);
