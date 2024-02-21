import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native';
import { IconSource } from '@brightlayer-ui/react-native-components/core/__types__';
import { Icon } from '@brightlayer-ui/react-native-components';
import { ExtendedTheme, useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Color from 'color';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';

export type WorkflowCardHeaderProps = Omit<ViewProps, 'children'> & {
    /**
     * Text to display as title in Header
     */
    title?: string;
    /**
     * Text to display as subtitle in Header
     */
    subTitle?: string;
    /**
     * On press functionality for the icon
     */
    onIconPress?: () => void;
    /**
     * The background color of Header
     * @default theme.colors.primary
     */
    backgroundColor?: string;
    /**
     * The text color of Header
     * @default theme.colors.onPrimary
     */
    textColor?: string;
    /**
     * The icon color of Header
     * @default theme.colors.onPrimary
     */
    iconColor?: string;
    /**
     * Icon to be shown on left side of Header
     * @default close
     */
    icon?: IconSource;
};

const makeStyles = (
    theme: ExtendedTheme,
    isTablet: boolean,
    backgroundColor?: string,
    textColor?: string
): StyleSheet.NamedStyles<{
    header: ViewStyle;
    mobileHeader: ViewStyle;
    tabletHeader: ViewStyle;
    headerContent: ViewStyle;
    headerText: ViewStyle;
}> =>
    StyleSheet.create({
        header: {
            height: 64,
            paddingHorizontal: 16,
            paddingVertical: 12,
            alignItems: 'center',
            flexDirection: 'row',
        },
        mobileHeader: {
            backgroundColor: backgroundColor || theme.colors.primaryContainer,
        },
        tabletHeader: {
            backgroundColor: backgroundColor || 'transparent',
        },
        headerContent: {
            marginLeft: 30,
            justifyContent: 'center',
            color: textColor || isTablet ? theme.colors.onSurface : theme.colors.onPrimaryContainer,
        },
        headerText: {
            color: textColor || isTablet ? theme.colors.onSurface : theme.colors.onPrimaryContainer,
        },
    });
/**
 * Component that renders the Header for the workflow card.
 *
 * @param {WorkflowCardHeaderProps} props - Props of WorkflowCardHeader component
 *
 */
export const WorkflowCardHeader: React.FC<WorkflowCardHeaderProps> = (props: WorkflowCardHeaderProps) => {
    const { title, subTitle, backgroundColor, textColor, iconColor, icon, style, onIconPress, ...otherprops } = props;
    const theme = useExtendedTheme();
    const { isTablet } = useScreenDimensions();
    const defaultStyles = makeStyles(theme, isTablet, backgroundColor, textColor);
    const insets = useSafeAreaInsets();
    const statusBarHeight = insets.top;
    const getIcon = (): JSX.Element | undefined => {
        if (icon) {
            return <Icon source={icon} color={iconColor || theme.colors.onSurface} size={24} />;
        }
        return <Icon source={{ name: 'close' }} color={iconColor || theme.colors.onSurface} size={24} />;
    };
    return (
        <View>
            {!isTablet && (
                <View
                    style={{
                        backgroundColor: backgroundColor || theme.colors.primaryContainer,
                        height: statusBarHeight,
                    }}
                >
                    <StatusBar
                        barStyle={
                            Color(backgroundColor || theme.colors.primaryContainer).isDark()
                                ? 'light-content'
                                : 'dark-content'
                        }
                    />
                </View>
            )}
            <View
                style={[
                    isTablet ? defaultStyles.tabletHeader : defaultStyles.mobileHeader,
                    defaultStyles.header,
                    style,
                ]}
                {...otherprops}
            >
                <TouchableOpacity testID="workflow-card-icon" onPress={onIconPress}>
                    {getIcon()}
                </TouchableOpacity>
                <View style={defaultStyles.headerContent}>
                    <Text variant="titleLarge" style={[defaultStyles.headerText]}>
                        {title}
                    </Text>
                    {subTitle && (
                        <Text variant="bodyMedium" style={[defaultStyles.headerText]}>
                            {subTitle}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    );
};
