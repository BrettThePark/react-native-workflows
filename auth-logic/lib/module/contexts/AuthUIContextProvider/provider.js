var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.AuthUIContextProvider=void 0;var _react=_interopRequireDefault(require("react"));var _context=require("./context");var _jsxFileName="/Users/e9939461/Desktop/workspace/split/react-native-workflows/auth-logic/src/contexts/AuthUIContextProvider/provider.tsx";var AuthUIContextProvider=function AuthUIContextProvider(props){var memoizedProps=_react.default.useMemo(function(){var propsForContext={authActions:props.authActions,registrationActions:props.registrationActions,showSelfRegistration:props.showSelfRegistration,title:props.title,allowDebugMode:props.allowDebugMode,projectImage:props.projectImage,contactEmail:props.contactEmail,contactPhone:props.contactPhone,htmlEula:props.htmlEula,passwordRequirements:props.passwordRequirements};return propsForContext;},[props.allowDebugMode,props.authActions,props.contactEmail,props.contactPhone,props.htmlEula,props.passwordRequirements,props.projectImage,props.registrationActions,props.showSelfRegistration,props.title]);return _react.default.createElement(_context.AuthUIContext.Provider,{value:memoizedProps,__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:12}},props.children);};exports.AuthUIContextProvider=AuthUIContextProvider;
//# sourceMappingURL=provider.js.map