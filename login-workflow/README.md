# React Native Auth Workflow

[![](https://img.shields.io/circleci/project/github/etn-ccis/blui-react-native-workflows/master.svg?style=flat)](https://circleci.com/gh/etn-ccis/blui-react-native-workflows/tree/master) ![npm (scoped)](https://img.shields.io/npm/v/@brightlayer-ui/react-native-auth-workflow) [![codecov](https://codecov.io/gh/etn-ccis/blui-react-native-workflows/branch/master/graph/badge.svg?token=U4OI0D5UVP)](https://codecov.io/gh/etn-ccis/blui-react-native-workflows)

The React Native Auth Workflow package provides a consistent authentication and registration experience across Eaton mobile applications using React Native.

This includes pre-build implementations of the screens for Login, Forgot Password, Contact Information, Self-Registration, Registration By Invitation, and Change Password.

Integrating the user interface into your application is as easy as providing the API calls for the various authentication and registration actions performed by the user. The `AuthNavigationContainer` automatically handles the presentation of the non-secure (pre-authorization) and secure (custom application) portions of a mobile application.

**iOS**

![Login iOS](https://raw.githubusercontent.com/etn-ccis/blui-react-native-workflows/master/login-workflow/media/ios-login.png) ![Home iOS](https://raw.githubusercontent.com/etn-ccis/blui-react-native-workflows/master/login-workflow/media/ios-home.png) ![Password iOS](https://raw.githubusercontent.com/etn-ccis/blui-react-native-workflows/master/login-workflow/media/ios-password.png)

**Android**

![Login Android](https://raw.githubusercontent.com/etn-ccis/blui-react-native-workflows/master/login-workflow/media/android-login.png) ![Home Android](https://raw.githubusercontent.com/etn-ccis/blui-react-native-workflows/master/login-workflow/media/android-home.png) ![Password Android](https://raw.githubusercontent.com/etn-ccis/blui-react-native-workflows/master/login-workflow/media/android-password.png)

# Compatibility

This package has a peer dependency on [React Native Paper](https://github.com/callstack/react-native-paper).

-   @brightlayer-ui/react-auth-workflow @1.x --> react-native-paper @3.x
-   @brightlayer-ui/react-auth-workflow @2.x --> react-native-paper @4.x

# Installation

To install the latest version of this package, run:

```shell
npm install --save @brightlayer-ui/react-native-auth-workflow
// or
yarn add @brightlayer-ui/react-native-auth-workflow
```

# Integration

You have two options for using this package in your application. You can manually integrate the package into an existing project, or you can start a project using the `/example` project provided in the package.

To integrate the package into an existing project, read our [Existing Project Integration ](https://github.com/etn-ccis/blui-react-native-workflows/tree/master/login-workflow/docs/existing-project-integration.md) instructions. Even if you are starting from scratch, it may be useful for you to refer to the example project while getting started.

To use the example project as a starting point, read our [Sample Project Integration ](https://github.com/etn-ccis/blui-react-native-workflows/tree/master/login-workflow/docs/sample-project-integration.md) instructions.

# Usage (Security State)

After setup, you are now able to access various security actions and state from within your application. Importing `useSecurityActions` and `useSecurityState` allows you use these hooks as follows:

```ts
import { useSecurityActions, useSecurityState } from '@brightlayer-ui/react-native-auth-workflow';

const securityActions = useSecurityActions();
const securityState = useSecurityState();
```

The `securityActions` allows you to access actions related to user authentication and de-authentication. You can call `securityActions.onUserNotAuthenticated();` to un-authenticate (i.e. log user out) from the application.

The `securityState` allows you to access state related to security, such as the currently authenticated user's email (`securityState.email`).

More information about React Native Auth Workflow's exported objects can found in the [API](https://github.com/etn-ccis/blui-react-native-workflows/tree/master/login-workflow/docs/API.md) documentation.

# Deep Linking

The following is a list of the screens and their parameters which a deep link may launch to:

-   `login`: the login screen.
-   `PasswordResetInitiation`: the first screen of the Password Reset flow.
-   `PasswordResetCompletion`: the later half of the Password Reset flow, takes parameter `code` and `email`.
-   `RegistrationInvite`: the Registration via Invitation flow, takes parameter `code` and `email`.
-   `Registration`: the later half of the Self Registration flow, takes parameter: `code` and `email`.
-   `SupportContact`: the Contact Support screen.

#### Testing Deep Links

-   Test iOS simulator with `xcrun simctl openurl booted authui://invite/8k27jshInvite234Code`
-   Test Android with `adb shell am start -W -a android.intent.action.VIEW -d "authui://invite/8k27jshInvite234Code" com.shiverware.eaton.authui`
-   Test on device from browser `authui://invite/8k27jshInvite234Code`

Note that the `authui://` prefix is set by your application, as in the file at `example/src/navigation/DeepLinking.ts`.

# APIs

More information about React Native Auth Workflow's exported objects and functions can found in the [API](https://github.com/etn-ccis/blui-react-native-workflows/tree/master/login-workflow/docs/API.md) documentation.

# Language Support

For information about supporting multiple languages, refer to our [Language Support](https://github.com/etn-ccis/blui-react-native-workflows/tree/master/login-workflow/docs/language-support.md) guidelines.

# Theming

For information about supporting different themes, refer to our [Theme Support](https://github.com/etn-ccis/blui-react-native-workflows/tree/master/login-workflow/docs/theme-support.md) guidelines.

# Migrating from v5 => v6

We have listened to your feedback and version 5 of this library is a significant rewrite that aims to address many requests for greater flexibility and customization of the workflows.

Some notable changes include:

-   Router independence — you now have full control over your routing library and its configuration
-   Allowing you to manage the authentication status / mechanism (separating UI from business logic)
-   Separation of Login and Registration workflows so they can be used independently
-   Allow for re-ordering or adding/removing screens from workflows (utility components available to help you match our styling in custom screens)
-   Exporting screens individually so you can build your own custom flows
-   Simpler approach to translations (separating our internal translations from your application-level translations)
-   Greater customization of screens through props (and moving customization properties to the screens they affect instead of handling all customizations through a monolithic wrapper component)
-   Improved error management mechanism (customizable)

Learn more about upgrading your existing application by reading our [Migrating Guide](https://github.com/etn-ccis/blui-react-workflows/tree/master/login-workflow/docs/migration-guide-3-4.md)


# Contributors

To work on this package as a contributor, first clone down the repository:

```shell
git clone https://github.com/etn-ccis/blui-react-native-workflows
cd react-native-workflows/login-workflow
```

You can install all necessary dependencies and run the demo project by running:

```shell
yarn start:example
// or
yarn start:example-android
```

If you make changes to the library components and want to link them to the running example project, you can run:

```shell
yarn link:components
```

You can build the library by running:

```shell
yarn build
```

You can run the Lint checks, prettier formatter, typescript validator, and unit tests by running:

```shell
yarn validate
```

You can update the auto-generated licenses.md file by running:

```shell
yarn generate:licenses
```
