"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".Button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  cursor: pointer;\n  min-width: 32px;\n  min-height: 32px;\n  background-color: aliceblue;\n}\n\n.Button-primary {\n  background-color: pink;\n}\n\n.Button-secondary {\n  background-color: burlywood;\n}\n\n.Button-error {\n  background-color: red;\n}\n"),exports.Button=function(e){var n=e.type,o=e.text,r=e.onClick;return t.default.createElement("button",{type:"button",className:"Button Button-"+n,onClick:r},o)};
//# sourceMappingURL=index.js.map
