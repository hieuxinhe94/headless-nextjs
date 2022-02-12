self["webpackHotUpdate_N_E"]("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyJdLCJuYW1lcyI6WyJnZXRTdHJhcGlVUkwiLCJwYXRoIiwicHJvY2VzcyIsImZldGNoQVBJIiwidXJsUGFyYW1zT2JqZWN0Iiwib3B0aW9ucyIsIm1lcmdlZE9wdGlvbnMiLCJoZWFkZXJzIiwibG9jYWxlIiwicXVlcnlTdHJpbmciLCJxcyIsInJlcXVlc3RVcmwiLCJjb25zb2xlIiwiZXJyb3IiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0EsWUFBVCxHQUFpQztBQUFBLE1BQVhDLElBQVcsdUVBQUosRUFBSTtBQUN0QyxtQkFDRUMsOENBQUEsSUFBMEMsQ0FENUMsU0FFR0QsSUFGSDtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBZUUsUUFBdEI7QUFBQTtBQUFBOzs7b1NBQU8saUJBQXdCRixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QkcsMkJBQTlCLDJEQUFnRCxFQUFoRDtBQUFvREMsbUJBQXBELDJEQUE4RCxFQUE5RDtBQUNMO0FBQ01DLHlCQUZEO0FBR0hDLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0I7QUFEVDtBQUhOLGVBTUFGLE9BTkE7QUFTTEQsMkJBQWUsQ0FBQ0ksTUFBaEIsR0FBeUIsSUFBekIsQ0FUSyxDQVdMOztBQUNNQyx1QkFaRCxHQVllQyxtREFBQSxDQUFhTixlQUFiLENBWmY7QUFhQ08sc0JBYkQsYUFhaUJYLFlBQVksZUFDekJDLElBRHlCLFNBQ2xCUSxXQUFXLGNBQU9BLFdBQVAsSUFBdUIsRUFEaEIsRUFiN0I7QUFpQkxHLG1CQUFPLENBQUNDLEtBQVIsQ0FBY0YsVUFBZCxFQWpCSyxDQW1CTDs7QUFuQks7QUFBQSxtQkFvQmtCRyxLQUFLLENBQUNILFVBQUQsRUFBYUwsYUFBYixDQXBCdkI7O0FBQUE7QUFvQkNTLG9CQXBCRDs7QUFBQSxnQkF1QkFBLFFBQVEsQ0FBQ0MsRUF2QlQ7QUFBQTtBQUFBO0FBQUE7O0FBd0JISixtQkFBTyxDQUFDQyxLQUFSLENBQWNFLFFBQVEsQ0FBQ0UsVUFBdkI7QUF4Qkcsa0JBeUJHLElBQUlDLEtBQUoscUNBekJIOztBQUFBO0FBQUE7QUFBQSxtQkEyQmNILFFBQVEsQ0FBQ0ksSUFBVCxFQTNCZDs7QUFBQTtBQTJCQ0MsZ0JBM0JEO0FBQUEsNkNBNEJFQSxJQTVCRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmRhN2E3ZWNkOWU4NTE1ZGRhYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyBmcm9tIFwicXNcIlxyXG5cclxuLyoqXHJcbiAqIEdldCBmdWxsIFN0cmFwaSBVUkwgZnJvbSBwYXRoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIFVSTFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGdWxsIFN0cmFwaSBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9IFwiXCIpIHtcclxuICByZXR1cm4gYCR7XHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCBcImh0dHBzOi8vc2l4ZG9uZy1jbXMtaWNiOXgub25kaWdpdGFsb2NlYW4uYXBwXCJcclxuICB9JHtwYXRofWBcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciB0byBtYWtlIEdFVCByZXF1ZXN0cyB0byBTdHJhcGkgQVBJIGVuZHBvaW50c1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBBUEkgcm91dGVcclxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byBmZXRjaFxyXG4gKiBAcmV0dXJucyBQYXJzZWQgQVBJIGNhbGwgcmVzcG9uc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoLCB1cmxQYXJhbXNPYmplY3QgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgLy8gTWVyZ2UgZGVmYXVsdCBhbmQgdXNlciBvcHRpb25zXHJcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgLi4ub3B0aW9ucyxcclxuICB9XHJcblxyXG4gIHVybFBhcmFtc09iamVjdC5sb2NhbGUgPSBcImVuXCI7XHJcbiAgXHJcbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcclxuICAgIGAvYXBpJHtwYXRofSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxyXG4gICl9YFxyXG5cclxuICBjb25zb2xlLmVycm9yKHJlcXVlc3RVcmwpXHJcblxyXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIG1lcmdlZE9wdGlvbnMpXHJcblxyXG4gIC8vIEhhbmRsZSByZXNwb25zZVxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCBwbGVhc2UgdHJ5IGFnYWluYClcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuIFxyXG5cclxuXHJcblxyXG5cclxuIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9