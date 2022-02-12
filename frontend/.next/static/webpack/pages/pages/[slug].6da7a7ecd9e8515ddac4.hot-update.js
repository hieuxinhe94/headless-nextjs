self["webpackHotUpdate_N_E"]("pages/pages/[slug]",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; }
/* harmony export */ });
/* harmony import */ var D_Work_Transfomation_landingsite_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Work_Transfomation_landingsite_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Work_Transfomation_landingsite_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Work_Transfomation_landingsite_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Work_Transfomation_landingsite_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Work_Transfomation_landingsite_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */

function getStrapiURL() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "".concat("https://sixdong-cms-icb9x.ondigitalocean.app" || 0).concat(path);
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */

function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}

function _fetchAPI() {
  _fetchAPI = (0,D_Work_Transfomation_landingsite_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Work_Transfomation_landingsite_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(path) {
    var urlParamsObject,
        options,
        mergedOptions,
        queryString,
        requestUrl,
        response,
        data,
        _args = arguments;
    return D_Work_Transfomation_landingsite_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlParamsObject = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            // Merge default and user options
            mergedOptions = _objectSpread({
              headers: {
                "Content-Type": "application/json"
              }
            }, options);
            urlParamsObject.locale = "en"; // Build request URL

            queryString = qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(urlParamsObject);
            requestUrl = "".concat(getStrapiURL("/api".concat(path).concat(queryString ? "?".concat(queryString) : "")));
            console.error(requestUrl); // Trigger API call

            _context.next = 9;
            return fetch(requestUrl, mergedOptions);

          case 9:
            response = _context.sent;

            if (response.ok) {
              _context.next = 13;
              break;
            }

            console.error(response.statusText);
            throw new Error("An error occured please try again");

          case 13:
            _context.next = 15;
            return response.json();

          case 15:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAPI.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyJdLCJuYW1lcyI6WyJnZXRTdHJhcGlVUkwiLCJwYXRoIiwicHJvY2VzcyIsImZldGNoQVBJIiwidXJsUGFyYW1zT2JqZWN0Iiwib3B0aW9ucyIsIm1lcmdlZE9wdGlvbnMiLCJoZWFkZXJzIiwibG9jYWxlIiwicXVlcnlTdHJpbmciLCJxcyIsInJlcXVlc3RVcmwiLCJjb25zb2xlIiwiZXJyb3IiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0EsWUFBVCxHQUFpQztBQUFBLE1BQVhDLElBQVcsdUVBQUosRUFBSTtBQUN0QyxtQkFDRUMsOENBQUEsSUFBMEMsQ0FENUMsU0FFR0QsSUFGSDtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBZUUsUUFBdEI7QUFBQTtBQUFBOzs7b1NBQU8saUJBQXdCRixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QkcsMkJBQTlCLDJEQUFnRCxFQUFoRDtBQUFvREMsbUJBQXBELDJEQUE4RCxFQUE5RDtBQUNMO0FBQ01DLHlCQUZEO0FBR0hDLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0I7QUFEVDtBQUhOLGVBTUFGLE9BTkE7QUFTTEQsMkJBQWUsQ0FBQ0ksTUFBaEIsR0FBeUIsSUFBekIsQ0FUSyxDQVdMOztBQUNNQyx1QkFaRCxHQVllQyxtREFBQSxDQUFhTixlQUFiLENBWmY7QUFhQ08sc0JBYkQsYUFhaUJYLFlBQVksZUFDekJDLElBRHlCLFNBQ2xCUSxXQUFXLGNBQU9BLFdBQVAsSUFBdUIsRUFEaEIsRUFiN0I7QUFpQkxHLG1CQUFPLENBQUNDLEtBQVIsQ0FBY0YsVUFBZCxFQWpCSyxDQW1CTDs7QUFuQks7QUFBQSxtQkFvQmtCRyxLQUFLLENBQUNILFVBQUQsRUFBYUwsYUFBYixDQXBCdkI7O0FBQUE7QUFvQkNTLG9CQXBCRDs7QUFBQSxnQkF1QkFBLFFBQVEsQ0FBQ0MsRUF2QlQ7QUFBQTtBQUFBO0FBQUE7O0FBd0JISixtQkFBTyxDQUFDQyxLQUFSLENBQWNFLFFBQVEsQ0FBQ0UsVUFBdkI7QUF4Qkcsa0JBeUJHLElBQUlDLEtBQUoscUNBekJIOztBQUFBO0FBQUE7QUFBQSxtQkEyQmNILFFBQVEsQ0FBQ0ksSUFBVCxFQTNCZDs7QUFBQTtBQTJCQ0MsZ0JBM0JEO0FBQUEsNkNBNEJFQSxJQTVCRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL1tzbHVnXS42ZGE3YTdlY2Q5ZTg1MTVkZGFjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gXCJxc1wiXHJcblxyXG4vKipcclxuICogR2V0IGZ1bGwgU3RyYXBpIFVSTCBmcm9tIHBhdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCBvZiB0aGUgVVJMXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEZ1bGwgU3RyYXBpIFVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gXCJcIikge1xyXG4gIHJldHVybiBgJHtcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cHM6Ly9zaXhkb25nLWNtcy1pY2I5eC5vbmRpZ2l0YWxvY2Vhbi5hcHBcIlxyXG4gIH0ke3BhdGh9YFxyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaSBBUEkgZW5kcG9pbnRzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gdXJsUGFyYW1zT2JqZWN0IFVSTCBwYXJhbXMgb2JqZWN0LCB3aWxsIGJlIHN0cmluZ2lmaWVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXHJcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcclxuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH1cclxuXHJcbiAgdXJsUGFyYW1zT2JqZWN0LmxvY2FsZSA9IFwiZW5cIjtcclxuICBcclxuICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCByZXF1ZXN0VXJsID0gYCR7Z2V0U3RyYXBpVVJMKFxyXG4gICAgYC9hcGkke3BhdGh9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogXCJcIn1gXHJcbiAgKX1gXHJcblxyXG4gIGNvbnNvbGUuZXJyb3IocmVxdWVzdFVybClcclxuXHJcbiAgLy8gVHJpZ2dlciBBUEkgY2FsbFxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCwgbWVyZ2VkT3B0aW9ucylcclxuXHJcbiAgLy8gSGFuZGxlIHJlc3BvbnNlXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBBbiBlcnJvciBvY2N1cmVkIHBsZWFzZSB0cnkgYWdhaW5gKVxyXG4gIH1cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG4gXHJcblxyXG5cclxuXHJcblxyXG4gXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=