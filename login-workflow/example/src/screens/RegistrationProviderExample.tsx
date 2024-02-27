import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useApp } from '../context/AppContextProvider';
import { ProjectRegistrationUIActions } from '../actions/RegistrationUIActions';
import i18nAppInstance from '../../translations/i18n';
import {
    RegistrationContextProvider,
    ErrorContextProvider,
    RegistrationWorkflow,
    // Uncomment screens as per example
    // EulaScreen,
    AccountDetailsScreen,
    // WorkflowCard,
    // WorkflowCardHeader,
    // WorkflowCardBody,
    // WorkflowCardActions,
} from '@brightlayer-ui/react-native-auth-workflow';
// Uncomment below lines as per example
// import { CustomScreen } from './../components/CustomScreen';
// import { Text } from 'react-native-paper';
// import { View } from 'react-native';
import { RootStackParamList } from '../navigation';
import { useNavigation } from '@react-navigation/native';
import { CustomScreen } from '../components/CustomScreen';

type AppProps = {
    navigation: StackNavigationProp<RootStackParamList, 'RegistrationProviderExample'>;
};

const RegistrationProviderExample: React.FC<AppProps> = (): JSX.Element => {
    const app = useApp();
    const nav = useNavigation();
    return (
        <RegistrationContextProvider
            language={app.language}
            actions={ProjectRegistrationUIActions()}
            i18n={i18nAppInstance}
            navigate={(destination: string | number) => {
                if (typeof destination === 'string') {
                    nav.navigate(destination);
                } else {
                    nav.goBack();
                }
            }}
            routeConfig={{
                LOGIN: 'Home',
                FORGOT_PASSWORD: undefined,
                RESET_PASSWORD: undefined,
                REGISTER_INVITE: undefined,
                REGISTER_SELF: undefined,
                SUPPORT: undefined,
            }}
        >
            <ErrorContextProvider>
                {/* Default Implementation */}
                {/* <RegistrationWorkflow /> */}

                {/* implementation with custom screens. This custom screen is using app and workflow level translations  */}
                <RegistrationWorkflow>
                    {/* <EulaScreen/> */}
                    <CustomScreen />
                    <AccountDetailsScreen />
                </RegistrationWorkflow>

                {/* Show default success screen */}
                {/* <RegistrationWorkflow successScreen={
                    <WorkflowCard>
                        <WorkflowCardHeader title='Test Success Screen' onIconPress={()=>{
                            console.log('close icon pressed')
                        }}></WorkflowCardHeader>
                        <WorkflowCardBody>
                            <View><Text>Success</Text></View>
                        </WorkflowCardBody>
                        <WorkflowCardActions
                            showNext
                            nextLabel="Okay"
                            fullWidthButton
                        />
                    </WorkflowCard>
                }>
                    <EulaScreen/>
                    <CustomScreen/>
                    <AccountDetailsScreen/>
                </RegistrationWorkflow> */}

                {/* Invite Registration Mode */}
                {/* <RegistrationWorkflow
                    isInviteRegistration
                    initialRegistrationParams={{ code: '123', email: 'aa@aa.aa' }}
                /> */}
            </ErrorContextProvider>
        </RegistrationContextProvider>
    );
};
export default RegistrationProviderExample;
