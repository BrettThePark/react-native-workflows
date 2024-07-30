/**
 * @packageDocumentation
 * @module Components
 */

import * as React from 'react';

// Components
import { Header } from '@brightlayer-ui/react-native-components';
import { useTheme } from 'react-native-paper';
import * as Colors from '@brightlayer-ui/colors';
import { Icon } from '@brightlayer-ui/react-native-components';

/**
 * @param title  The title to show in the header.
 * @param backAction  The function to handle the back action.
 * @param backgroundColor  A custom background color to override the default
 */
type CloseHeaderProps = {
    title: string;
    backAction: () => void;
    backgroundColor?: string;
};

/**
 * Creates a styled header with a back button.
 *
 * @category Component
 */
export const CloseHeader: React.FC<CloseHeaderProps> = (props) => {
    const theme = useTheme();
    const CloseIcon = (<Icon source={{ family: 'material', name: 'close' }} color={theme.dark ? theme.colors.onSurface : theme.colors.surface} size={24} />);

    return (
        <Header
            title={props.title}
            icon={CloseIcon}
            fontColor={theme.dark ? theme.colors.onSurface : theme.colors.surface}
            onIconPress={props.backAction}
            backgroundColor={
                props.backgroundColor ||
                (theme.dark
                    ? Colors.black[800]
                    : (theme.dark ? Colors.gray[500] : theme.colors.primary) || theme.colors.primary)
            }
        />
    );
};
