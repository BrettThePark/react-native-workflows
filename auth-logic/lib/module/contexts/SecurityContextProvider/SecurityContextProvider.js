var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.useSecurityActions=exports.useSecurityState=exports.SecurityActionContext=exports.SecurityContextProvider=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireDefault(require("react"));var _reducer=require("./reducer");var _jsxFileName="/Users/e9939461/Desktop/workspace/split/react-native-workflows/auth-logic/src/contexts/SecurityContextProvider/SecurityContextProvider.tsx";var StateContext=_react.default.createContext(null);var DispatchContext=_react.default.createContext(null);exports.SecurityActionContext=DispatchContext;var useSecurityState=function useSecurityState(){var context=_react.default.useContext(StateContext);if(context===null){throw new Error('useSecurityState must be used within an SecurityContextProvider');}return context;};exports.useSecurityState=useSecurityState;var useSecurityActions=function useSecurityActions(){var context=_react.default.useContext(DispatchContext);if(context===null){throw new Error('useSecurityActions must be used within an SecurityContextProvider');}return context;};exports.useSecurityActions=useSecurityActions;var SecurityContextProvider=function SecurityContextProvider(props){var initialContextState={userId:undefined,email:undefined,rememberMeDetails:{email:undefined,rememberMe:undefined},isAuthenticatedUser:false,isLoading:true,isSignOut:false,isShowingChangePassword:false};var _React$useReducer=_react.default.useReducer(_reducer.reducer,initialContextState),_React$useReducer2=(0,_slicedToArray2.default)(_React$useReducer,2),state=_React$useReducer2[0],dispatch=_React$useReducer2[1];var onUserNotAuthenticated=_react.default.useCallback(function(){var clearRememberMe=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var overrideRememberMeEmail=arguments.length>1?arguments[1]:undefined;dispatch({type:'userNotAuthenticated',payload:{clearRememberMe:clearRememberMe,overrideRememberMeEmail:overrideRememberMeEmail}});},[]);var showChangePassword=_react.default.useCallback(function(){dispatch({type:'showChangePassword'});},[]);var hideChangePassword=_react.default.useCallback(function(){dispatch({type:'hideChangePassword'});},[]);var onUserAuthenticated=_react.default.useCallback(function(onUserAuthenticatedArgs){dispatch({type:'userAuthenticated',payload:onUserAuthenticatedArgs});},[]);var memoizedAuthHelper=_react.default.useMemo(function(){var authHelper={onUserAuthenticated:onUserAuthenticated,onUserNotAuthenticated:onUserNotAuthenticated,showChangePassword:showChangePassword,hideChangePassword:hideChangePassword};return authHelper;},[onUserAuthenticated,onUserNotAuthenticated,showChangePassword,hideChangePassword]);return _react.default.createElement(StateContext.Provider,{value:state,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:9}},_react.default.createElement(DispatchContext.Provider,{value:memoizedAuthHelper,__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:13}},props.children));};exports.SecurityContextProvider=SecurityContextProvider;
//# sourceMappingURL=SecurityContextProvider.js.map