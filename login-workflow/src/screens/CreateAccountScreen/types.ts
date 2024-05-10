import { WorkflowCardProps } from '../../components/WorkflowCard/WorkflowCard.types';
import { ErrorManagerProps } from '../../components/Error';
import { TextInputProps } from 'react-native-paper';

export type CreateAccountScreenProps = WorkflowCardProps & {
    /**
     * The label for the email field
     */
    emailLabel?: string;

    /**
     * The initial value for the email text field
     */
    initialValue?: string;

    /**
     * The function used to test the input for valid formatting
     * @param {(email: string) => boolean | string} email - validate format via EMAIL_REGEX
     * @returns boolean | string
     */
    emailValidator?: (email: string) => boolean | string;

    /**
     * The props to pass to the email text field.
     * See [MUI's TextFieldProps API](https://mui.com/material-ui/api/text-field/) for more details.
     */
    emailTextFieldProps?: TextInputProps;

    /**
     * The configuration for customizing how errors are displayed
     */
    errorDisplayConfig?: ErrorManagerProps;
};
