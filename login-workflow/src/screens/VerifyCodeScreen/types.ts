import { TextInputProps } from 'react-native-paper';
import { WorkflowCardProps } from '../../components/WorkflowCard/WorkflowCard.types';
import { ErrorManagerProps } from '../../components';

export type VerifyCodeScreenProps = WorkflowCardProps & {
    /**
     * @param {string} codeValidator - The function that validates the verification code text input
     * @returns boolean | string
     */
    codeValidator?: (code: string) => boolean | string;

    /**
     * @param {() => void} - The function that is called when the resend link/button is clicked
     * @returns void
     */
    onResend?: () => void;

    /**
     * @param {string} resendInstructions - The text to display ahead of the resend link/button
     */
    resendInstructions?: string;

    /**
     * @param {string} resendLabel - The text to display for the resend link/button
     */
    resendLabel?: string;

    /**
     * @param {string} initialValue - The initial value for the code text field
     */
    initialValue?: string;

    /**
     * @param {string} verifyCodeInputLabel - The label for the code text field
     */
    verifyCodeInputLabel?: string;

    /**
     * @param {ErrorManagerProps} errorDisplayConfig - The configuration for customizing how errors are displayed
     */
    errorDisplayConfig?: ErrorManagerProps;

    /**
     * @param {TextInputProps} verifyCodeTextInputProps - The props to pass to the verify code field.
     * See [MUI's TextFieldProps API](https://mui.com/material-ui/api/text-field/) for more details.
     */
    verifyCodeTextInputProps?: TextInputProps;
};
