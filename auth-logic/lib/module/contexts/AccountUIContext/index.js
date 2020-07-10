Object.defineProperty(exports,"__esModule",{value:true});var _exportNames={useAccountUIState:true,useAccountUIActions:true,AccountUIStateContext:true,AccountUIActionContext:true,AccountActions:true};Object.defineProperty(exports,"AccountUIStateContext",{enumerable:true,get:function get(){return _context.StateContext;}});Object.defineProperty(exports,"AccountUIActionContext",{enumerable:true,get:function get(){return _context.ActionContext;}});Object.defineProperty(exports,"AccountActions",{enumerable:true,get:function get(){return _dispatchActions.AccountActions;}});exports.useAccountUIActions=exports.useAccountUIState=void 0;var _context=require("./context");var _react=require("react");var _types=require("./types");Object.keys(_types).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _types[key];}});});var _reducer=require("./reducer");Object.keys(_reducer).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _reducer[key];}});});var _dispatchActions=require("./dispatchActions");var useAccountUIState=function useAccountUIState(){var context=(0,_react.useContext)(_context.StateContext);if(context===null){throw new Error('useAccountUIState must be used within an AccountUIStateContext');}return context;};exports.useAccountUIState=useAccountUIState;var useAccountUIActions=function useAccountUIActions(){var context=(0,_react.useContext)(_context.ActionContext);if(context===null){throw new Error('useAccountUIActions must be used within an AccountUIActionContext');}return context;};exports.useAccountUIActions=useAccountUIActions;
//# sourceMappingURL=index.js.map