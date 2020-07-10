Object.defineProperty(exports,"__esModule",{value:true});exports.timeSince=exports.formatTimeShort=exports.formatTime=exports.formatDateShort=exports.formatDate=exports.formatMonthLong=exports.formatDateTime=void 0;var _dateFns=require("date-fns");var _lib=require("../lib");var _i18n=require("../data/translations/i18n");var formatDateTime=function formatDateTime(dateTime,locales){return dateTime?new Date(dateTime).toLocaleString(locales):'';};exports.formatDateTime=formatDateTime;var formatMonthLong=function formatMonthLong(dateTime,locales){return dateTime?new Date(dateTime).toLocaleString(locales,{month:'long'}):'';};exports.formatMonthLong=formatMonthLong;var formatDate=function formatDate(dateTime,locales){return dateTime?new Date(dateTime).toLocaleDateString(locales):'';};exports.formatDate=formatDate;var formatDateShort=function formatDateShort(dateTime,locales){return dateTime?new Date(dateTime).toLocaleDateString(locales,{month:'2-digit',day:'2-digit',year:'2-digit'}):'';};exports.formatDateShort=formatDateShort;var formatTime=function formatTime(dateTime,locales){return dateTime?new Date(dateTime).toLocaleTimeString(locales):'';};exports.formatTime=formatTime;var formatTimeShort=function formatTimeShort(dateTime,locales){return dateTime?new Date(dateTime).toLocaleTimeString(locales,{hour:'2-digit',minute:'2-digit'}):'';};exports.formatTimeShort=formatTimeShort;var timeSince=function timeSince(dateTime){return dateTime?(0,_dateFns.formatDistance)(new Date(dateTime),_lib.Clock.now(),{locale:_i18n.dateLocale,addSuffix:true}):'';};exports.timeSince=timeSince;
//# sourceMappingURL=date-time-formatter.js.map