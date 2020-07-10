var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.dateLocale=exports.getChartsTooltipDateTimeLabelFormats=exports.getChartsAxisDateTimeLabelFormats=exports.getChartsLanguage=void 0;var _reactNative=require("react-native");var _i18next=_interopRequireDefault(require("i18next"));var _reactI18next=require("react-i18next");var _english=_interopRequireDefault(require("./english"));var _french=_interopRequireDefault(require("./french"));var _locale=require("date-fns/locale");var _NativeModules$Settin;var AppleLocaleSettings=(_NativeModules$Settin=_reactNative.NativeModules.SettingsManager)===null||_NativeModules$Settin===void 0?void 0:_NativeModules$Settin.settings;var AndroidLocaleSettings=_reactNative.NativeModules.I18nManager;var deviceLocale='en';if(AppleLocaleSettings&&_reactNative.Platform.OS==='ios'){deviceLocale=AppleLocaleSettings.AppleLocale||AppleLocaleSettings.AppleLanguages[0];}else if(AndroidLocaleSettings&&_reactNative.Platform.OS==='android'){deviceLocale=AndroidLocaleSettings.localeIdentifier;}_i18next.default.use(_reactI18next.initReactI18next).init({resources:{en:_english.default,fr:_french.default,fr_US:_french.default,fr_CA:_french.default},lng:deviceLocale,fallbackLng:'en',interpolation:{escapeValue:false}});var getDateLocale=function getDateLocale(){switch(_i18next.default.language){case'fr':return _locale.frCA;default:return _locale.enUS;}};var getChartsLanguage=function getChartsLanguage(){switch(_i18next.default.language){case'fr':return{loading:'Chargement...',months:['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],weekdays:['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'],shortMonths:['jan','fév','mar','avr','mai','juin','juil','aoû','sep','oct','nov','déc'],rangeSelectorFrom:'Du',rangeSelectorTo:'au',rangeSelectorZoom:'Période',downloadPNG:'Télécharger en PNG',downloadJPEG:'Télécharger en JPEG',downloadPDF:'Télécharger en PDF',downloadSVG:'Télécharger en SVG',resetZoom:'Réinitialiser le zoom',resetZoomTitle:'Réinitialiser le zoom',thousandsSep:' ',decimalPoint:','};default:return undefined;}};exports.getChartsLanguage=getChartsLanguage;var getChartsAxisDateTimeLabelFormats=function getChartsAxisDateTimeLabelFormats(){switch(_i18next.default.language){case'fr':return undefined;case'en':return{day:'%m/%d',hour:'%l:%M %P',millisecond:'%l:%M:%S %P',second:'%l:%M:%S %P',minute:'%l:%M',month:'%b, %Y',year:'%Y',week:'%b %e'};default:return undefined;}};exports.getChartsAxisDateTimeLabelFormats=getChartsAxisDateTimeLabelFormats;var getChartsTooltipDateTimeLabelFormats=function getChartsTooltipDateTimeLabelFormats(){switch(_i18next.default.language){case'fr':return undefined;case'en':{var format='%m/%d/%Y %l:%M:%S %P';return{day:format,hour:format,millisecond:format,second:format,minute:format,month:format,year:format,week:format};}default:return undefined;}};exports.getChartsTooltipDateTimeLabelFormats=getChartsTooltipDateTimeLabelFormats;var dateLocale=getDateLocale();exports.dateLocale=dateLocale;var _default=_i18next.default;exports.default=_default;
//# sourceMappingURL=i18n.js.map