/**
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { Checkbox } from '../../components/Checkbox';
import { CloseHeader } from '../../components/CloseHeader';
import { CybersecurityBadge } from '../../components/CybersecurityBadge';
import { ErrorState } from '../../components/ErrorState';
import { IconSplash } from '../../components/IconSplash';
import { Instruction } from '../../components/Instruction';
import { LoginHeaderSplash } from '../../components/LoginHeaderSplash';
import { PageIndicator } from '../../components/PageIndicator';
import { PasswordRequirements } from '../../components/PasswordRequirements';
import { RequirementCheck } from '../../components/RequirementCheck';
import { ResizingClearButton } from '../../components/ResizingClearButton';
import { ScrollViewWithBackground } from '../../components/ScrollViewWithBackground';
import { SimpleDialog } from '../../components/SimpleDialog';
import { Spinner } from '../../components/Spinner';
import { TextInput } from '../../components/TextInput';
import { TextInputSecure } from '../../components/TextInputSecure';
import { ToggleButton } from '../../components/ToggleButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// test that all components render
describe('All components tested with enzyme', () => {
    it('Checkbox renders correctly', () => {
        const rendered = renderer
            .create(
                <Checkbox
                    label={'Checkbox'}
                    isChecked={false}
                    onPress={(): void => {
                        /* do nothing */
                    }}
                />
            )
            .toJSON();
        expect(rendered).toBeTruthy();
    });

    it('CloseHeader renders correctly', () => {
        const rendered = renderer
            .create(
                <CloseHeader
                    title={'CloseHeader'}
                    backAction={(): void => {
                        /* do nothing */
                    }}
                />
            )
            .toJSON();
        expect(rendered).toBeTruthy();
    });

    it('CyberSecurityBadge renders correctly', () => {
        const rendered = renderer.create(<CybersecurityBadge />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('ErrorState renders correctly', () => {
        const rendered = renderer.create(<ErrorState />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('IconSplash renders correctly', () => {
        const rendered = renderer.create(<IconSplash />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('Instruction renders correctly', () => {
        const rendered = renderer.create(<Instruction text={'Instruction'} />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('LoginHeaderSplash renders correctly', () => {
        const rendered = renderer.create(<LoginHeaderSplash />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('PageIndicator renders correctly', () => {
        const rendered = renderer.create(<PageIndicator currentPage={0} totalPages={10} />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('PasswordRequirements renders correctly', () => {
        const rendered = renderer.create(<PasswordRequirements passwordText={'PasswordText'} />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('RequirementsCheck renders correctly', () => {
        const rendered = renderer.create(<RequirementCheck text={'text'} isChecked={true} />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('ResizingClearButton renders correctly', () => {
        const rendered = renderer
            .create(
                <ResizingClearButton
                    title={'text'}
                    onPress={(): void => {
                        /* do nothing */
                    }}
                />
            )
            .toJSON();
        expect(rendered).toBeTruthy();
    });

    it('ScrollViewWithBackground renders correctly', () => {
        const rendered = renderer.create(<ScrollViewWithBackground />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('SimpleDialog renders correctly', () => {
        const rendered = renderer
            .create(
                <View>
                    <SimpleDialog
                        title={'title'}
                        bodyText={'bodyText'}
                        isVisible={true}
                        onDismiss={(): void => {
                            /* do nothing */
                        }}
                    />
                </View>
            )
            .toJSON();
        expect(rendered).toBeTruthy();
    });

    it('Spinner renders correctly', () => {
        const rendered = renderer
            .create(
                <View>
                    <Spinner></Spinner>
                </View>
            )
            .toJSON();
        expect(rendered).toBeTruthy();
    });

    it('TextInput renders correctly', () => {
        const rendered = renderer
            .create(
                <TextInput
                    label={'label'}
                    value={'value'}
                    onChangeText={(): void => {
                        /* do nothing */
                    }}
                />
            )
            .toJSON();
        expect(rendered).toBeTruthy();
    });

    it('TextInputSecure renders correctly', () => {
        const rendered = renderer
            .create(
                <TextInputSecure
                    label={'label'}
                    value={'value'}
                    onChangeText={(): void => {
                        /* do nothing */
                    }}
                />
            )
            .toJSON();
        expect(rendered).toBeTruthy();
    });

    it('ToggleButton renders correctly', () => {
        const rendered = renderer
            .create(
                <ToggleButton
                    text={'text'}
                    onPress={(): void => {
                        /* do nothing */
                    }}
                />
            )
            .toJSON();
        expect(rendered).toBeTruthy();
    });
});
