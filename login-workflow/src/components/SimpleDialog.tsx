/**
 * @packageDocumentation
 * @module Components
 */

import React from 'react';
 
// Components
import { Paragraph, Dialog, Portal, Button } from 'react-native-paper';

// Hooks
import { useLanguageLocale } from '../react-auth-shared';

/**
 * @param visible  If the dialog box should be shown.
 * @param onDismiss  The function to handle the on dismiss action.
 * @param title  The title text of the dialog box.
 * @param bodyText  The body text of the dialog box.
 */
type SimpleDialogProps = {
    visible: boolean;
    onDismiss: () => void;
    title: string;
    bodyText: string | null;
};

/**
 * Creates a simple acknowledgement dialog box (with one button, "Okay").
 *
 * @category Component
 */
export const SimpleDialog: React.FC<SimpleDialogProps> = (props) => {
    const { visible, onDismiss, title, bodyText } = props;
    const { t } = useLanguageLocale();
    return (
        <Portal>
            <Dialog visible={visible} dismissable={false}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>{bodyText ?? t('blui:MESSAGES.REQUEST_ERROR')}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button
                        uppercase={false}
                        onPress={(): void => {
                            onDismiss();
                        }}
                    >
                        {t('blui:ACTIONS.OKAY')}
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};
