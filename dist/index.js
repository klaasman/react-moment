!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("moment"),require("react")):"function"==typeof define&&define.amd?define(["moment","react"],t):"object"==typeof exports?exports["react-moment"]=t(require("moment"),require("react")):e["react-moment"]=t(e.moment,e.react)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(11),s=r(f),p=n(9),d=r(p),y=n(10),m=r(y),v=[d.default.string,d.default.number,d.default.array,d.default.object],h=[d.default.string,d.default.array],b=function(){},g=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setTimer=function(){n.clearTimer();var e=n.props.interval;t.pooledTimer||0===e||(n.timer=setInterval(function(){n.update(n.props)},e))},n.clearTimer=function(){!t.pooledTimer&&n.timer&&(clearInterval(n.timer),n.timer=null)},n.state={content:""},n.timer=null,n}return u(t,e),c(t,null,[{key:"startPooledTimer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e4;t.clearPooledTimer(),t.pooledTimer=setInterval(function(){t.pooledElements.forEach(function(e){0!==e.props.interval&&e.update()})},e)}},{key:"clearPooledTimer",value:function(){t.pooledTimer&&(clearInterval(t.pooledTimer),t.pooledTimer=null,t.pooledElements=[])}},{key:"pushPooledElement",value:function(e){return e instanceof t?void(t.pooledElements.indexOf(e)===-1&&t.pooledElements.push(e)):void console.error("Element not an instance of Moment.")}},{key:"getDatetime",value:function(e){var n=e.date,r=e.locale,o=e.parse,a=e.utc,i=e.unix,u=e.tz;n=n||e.children,o=o||t.globalParse,r=t.globalLocale?t.globalLocale:r?r:m.default.locale();var l=null;return l=a?m.default.utc(n,o,r):i?(0,m.default)(1e3*n,o,r):(0,m.default)(n,o,r),u&&(l=l.tz(u)),l}}]),c(t,[{key:"componentWillMount",value:function(){this.update(this.props)}},{key:"componentDidMount",value:function(){this.setTimer(),t.pooledTimer&&t.pushPooledElement(this)}},{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"componentWillReceiveProps",value:function(e){this.update(e)}},{key:"componentDidUpdate",value:function(e){e.interval!==this.props.interval&&this.setTimer()}},{key:"update",value:function(e){var n=this,r=e.format,o=e.fromNow,a=e.from,i=e.toNow,u=e.to,l=e.calendar,c=e.ago;r=r||t.globalFormat;var f=t.getDatetime(e),s="";s=r?f.format(r):a?f.from(a,c):o?f.fromNow(c):u?f.to(u,c):i?f.toNow(c):l?f.calendar():f.toString(),this.setState({content:s},function(){n.props.onChange(s)})}},{key:"render",value:function(){var e=this.props,n=e.as,r=(e.date,e.parse,e.format,e.fromNow,e.from,e.toNow,e.to,e.calendar,e.ago,e.utc,e.unix,e.tz,e.locale,e.interval,o(e,["as","date","parse","format","fromNow","from","toNow","to","calendar","ago","utc","unix","tz","locale","interval"])),a=n;return t.globalAs&&(a=t.globalAs),s.default.createElement(a||"time",l({dateTime:t.getDatetime(this.props)},r),this.state.content)}}]),t}(s.default.Component);g.propTypes={as:d.default.any,date:d.default.oneOfType(v),parse:d.default.oneOfType(h),format:d.default.string,ago:d.default.bool,fromNow:d.default.bool,from:d.default.oneOfType(v),toNow:d.default.bool,to:d.default.oneOfType(v),calendar:d.default.bool,unix:d.default.bool,utc:d.default.bool,tz:d.default.string,locale:d.default.string,interval:d.default.number,onChange:d.default.func},g.defaultProps={fromNow:!1,toNow:!1,calendar:!1,ago:!1,unix:!1,utc:!1,interval:6e4,onChange:b},g.globalLocale=null,g.globalFormat=null,g.globalParse=null,g.globalAs=null,g.pooledElements=[],g.pooledTimer=null,t.default=g},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function a(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}function i(){m&&d&&(m=!1,d.length?y=d.concat(y):v=-1,y.length&&u())}function u(){if(!m){var e=o(i);m=!0;for(var t=y.length;t;){for(d=y,y=[];++v<t;)d&&d[v].run();v=-1,t=y.length}d=null,m=!1,a(e)}}function l(e,t){this.fun=e,this.array=t}function c(){}var f,s,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var d,y=[],m=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new l(e,t)),1!==y.length||m||o(u)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){(function(t){"use strict";function n(e,t,n,o,a,i,u,l){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,o,a,i,u,l],s=0;c=new Error(t.replace(/%s/g,function(){return f[s++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(1))},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(e,t,n){(function(t){"use strict";var r=n(2),o=r;"production"!==t.env.NODE_ENV&&!function(){var e=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};o=function(t,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!t){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];e.apply(void 0,[n].concat(o))}}}(),e.exports=o}).call(t,n(1))},function(e,t,n){(function(t){"use strict";function r(e,n,r,l,c){if("production"!==t.env.NODE_ENV)for(var f in e)if(e.hasOwnProperty(f)){var s;try{o("function"==typeof e[f],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",l||"React class",r,f),s=e[f](n,f,l,r,null,i)}catch(e){s=e}if(a(!s||s instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",l||"React class",r,f,typeof s),s instanceof Error&&!(s.message in u)){u[s.message]=!0;var p=c?c():"";a(!1,"Failed %s type: %s%s",r,s.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var o=n(3),a=n(5),i=n(4),u={};e.exports=r}).call(t,n(1))},function(e,t,n){"use strict";var r=n(2),o=n(3),a=n(4);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){(function(t){"use strict";var r=n(2),o=n(3),a=n(5),i=n(4),u=n(6);e.exports=function(e,n){function l(e){var t=e&&(_&&e[_]||e[k]);if("function"==typeof t)return t}function c(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function f(e){this.message=e,this.stack=""}function s(e){function r(r,c,s,p,d,y,m){if(p=p||R,y=y||s,m!==i)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var v=p+":"+s;!u[v]&&l<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,p),u[v]=!0,l++)}return null==c[s]?r?new f(null===c[s]?"The "+d+" `"+y+"` is marked as required "+("in `"+p+"`, but its value is `null`."):"The "+d+" `"+y+"` is marked as required in "+("`"+p+"`, but its value is `undefined`.")):null:e(c,s,p,d,y)}if("production"!==t.env.NODE_ENV)var u={},l=0;var c=r.bind(null,!1);return c.isRequired=r.bind(null,!0),c}function p(e){function t(t,n,r,o,a,i){var u=t[n],l=x(u);if(l!==e){var c=N(u);return new f("Invalid "+o+" `"+a+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return s(t)}function d(){return s(r.thatReturnsNull)}function y(e){function t(t,n,r,o,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){var l=x(u);return new f("Invalid "+o+" `"+a+"` of type "+("`"+l+"` supplied to `"+r+"`, expected an array."))}for(var c=0;c<u.length;c++){var s=e(u,c,r,o,a+"["+c+"]",i);if(s instanceof Error)return s}return null}return s(t)}function m(){function t(t,n,r,o,a){var i=t[n];if(!e(i)){var u=x(i);return new f("Invalid "+o+" `"+a+"` of type "+("`"+u+"` supplied to `"+r+"`, expected a single ReactElement."))}return null}return s(t)}function v(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||R,u=j(t[n]);return new f("Invalid "+o+" `"+a+"` of type "+("`"+u+"` supplied to `"+r+"`, expected ")+("instance of `"+i+"`."))}return null}return s(t)}function h(e){function n(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(c(i,e[u]))return null;var l=JSON.stringify(e);return new f("Invalid "+o+" `"+a+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+l+"."))}return Array.isArray(e)?s(n):("production"!==t.env.NODE_ENV?a(!1,"Invalid argument supplied to oneOf, expected an instance of array."):void 0,r.thatReturnsNull)}function b(e){function t(t,n,r,o,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],l=x(u);if("object"!==l)return new f("Invalid "+o+" `"+a+"` of type "+("`"+l+"` supplied to `"+r+"`, expected an object."));for(var c in u)if(u.hasOwnProperty(c)){var s=e(u,c,r,o,a+"."+c,i);if(s instanceof Error)return s}return null}return s(t)}function g(e){function n(t,n,r,o,a){for(var u=0;u<e.length;u++){var l=e[u];if(null==l(t,n,r,o,a,i))return null}return new f("Invalid "+o+" `"+a+"` supplied to "+("`"+r+"`."))}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV?a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."):void 0,r.thatReturnsNull;for(var o=0;o<e.length;o++){var u=e[o];if("function"!=typeof u)return a(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",P(u),o),r.thatReturnsNull}return s(n)}function T(){function e(e,t,n,r,o){return O(e[t])?null:new f("Invalid "+r+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return s(e)}function w(e){function t(t,n,r,o,a){var u=t[n],l=x(u);if("object"!==l)return new f("Invalid "+o+" `"+a+"` of type `"+l+"` "+("supplied to `"+r+"`, expected `object`."));for(var c in e){var s=e[c];if(s){var p=s(u,c,r,o,a+"."+c,i);if(p)return p}}return null}return s(t)}function O(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(O);if(null===t||e(t))return!0;var n=l(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!O(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!O(a[1]))return!1}return!0;default:return!1}}function E(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function x(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":E(t,e)?"symbol":t}function N(e){if("undefined"==typeof e||null===e)return""+e;var t=x(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function P(e){var t=N(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function j(e){return e.constructor&&e.constructor.name?e.constructor.name:R}var _="function"==typeof Symbol&&Symbol.iterator,k="@@iterator",R="<<anonymous>>",I={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:d(),arrayOf:y,element:m(),instanceOf:v,node:T(),objectOf:b,oneOf:h,oneOfType:g,shape:w};return f.prototype=Error.prototype,I.checkPropTypes=u,I.PropTypes=I,I}}).call(t,n(1))},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},a=!0;e.exports=n(8)(o,a)}else e.exports=n(7)()}).call(t,n(1))},function(t,n){t.exports=e},function(e,n){e.exports=t}])});