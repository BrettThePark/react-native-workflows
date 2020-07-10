"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.parseTextForJSX=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _wrapNativeSuper2=_interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));function _wrapRegExp(re,groups){_wrapRegExp=function _wrapRegExp(re,groups){return new BabelRegExp(re,undefined,groups);};var _RegExp=(0,_wrapNativeSuper2.default)(RegExp);var _super=RegExp.prototype;var _groups=new WeakMap();function BabelRegExp(re,flags,groups){var _this=_RegExp.call(this,re,flags);_groups.set(_this,groups||_groups.get(re));return _this;}(0,_inherits2.default)(BabelRegExp,_RegExp);BabelRegExp.prototype.exec=function(str){var result=_super.exec.call(this,str);if(result)result.groups=buildGroups(result,this);return result;};BabelRegExp.prototype[typeof Symbol==="function"?Symbol.replace:"@@replace"]=function(str,substitution){if(typeof substitution==="string"){var groups=_groups.get(this);return _super[typeof Symbol==="function"?Symbol.replace:"@@replace"].call(this,str,substitution.replace(/\$<([^>]+)>/g,function(_,name){return"$"+groups[name];}));}else if(typeof substitution==="function"){var _this=this;return _super[typeof Symbol==="function"?Symbol.replace:"@@replace"].call(this,str,function(){var args=[];args.push.apply(args,arguments);if(typeof args[args.length-1]!=="object"){args.push(buildGroups(args,_this));}return substitution.apply(this,args);});}else{return _super[typeof Symbol==="function"?Symbol.replace:"@@replace"].call(this,str,substitution);}};function buildGroups(result,re){var g=_groups.get(re);return Object.keys(g).reduce(function(groups,name){groups[name]=result[g[name]];return groups;},Object.create(null));}return _wrapRegExp.apply(this,arguments);}var tagRegex=_wrapRegExp(/^<([0-9A-Z_a-z]+)>([\s\S]+?)<\/\1>/,{tag:1,text:2});var beforeTagRegex=_wrapRegExp(/^([\s\S]+?)(?=<[0-9A-Z_a-z]+?>)/,{text:1});var parseNextChunk=function parseNextChunk(textToParse){var tagMatch=tagRegex.exec(textToParse);var beforeTagMatch=beforeTagRegex.exec(textToParse);var tag='none';var text='';var nextIndex=textToParse.length;if(tagMatch){var _tagMatch$groups$tag,_tagMatch$groups,_tagMatch$groups$text,_tagMatch$groups2;tag=(_tagMatch$groups$tag=(_tagMatch$groups=tagMatch.groups)===null||_tagMatch$groups===void 0?void 0:_tagMatch$groups.tag)!==null&&_tagMatch$groups$tag!==void 0?_tagMatch$groups$tag:'';text=(_tagMatch$groups$text=(_tagMatch$groups2=tagMatch.groups)===null||_tagMatch$groups2===void 0?void 0:_tagMatch$groups2.text)!==null&&_tagMatch$groups$text!==void 0?_tagMatch$groups$text:'';nextIndex=tagMatch[0].length;}else if(beforeTagMatch){var _beforeTagMatch$group,_beforeTagMatch$group2;text=(_beforeTagMatch$group=(_beforeTagMatch$group2=beforeTagMatch.groups)===null||_beforeTagMatch$group2===void 0?void 0:_beforeTagMatch$group2.text)!==null&&_beforeTagMatch$group!==void 0?_beforeTagMatch$group:'';nextIndex=beforeTagMatch[0].length;}else{text=textToParse;}var result=[{tag:tag,text:text}];if(textToParse.length>0){return[].concat(result,(0,_toConsumableArray2.default)(parseNextChunk(textToParse.substring(nextIndex))));}return result;};var parseTextForJSX=function parseTextForJSX(parseableText){return parseNextChunk(parseableText);};exports.parseTextForJSX=parseTextForJSX;
//# sourceMappingURL=parseTextForJSX.js.map