"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./lib/utils/index.ts":
/*!****************************!*\
  !*** ./lib/utils/index.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cn: function() { return /* binding */ cn; },\n/* harmony export */   d: function() { return /* binding */ d; },\n/* harmony export */   gb: function() { return /* binding */ gb; },\n/* harmony export */   getPosts: function() { return /* binding */ getPosts; },\n/* harmony export */   rt: function() { return /* binding */ rt; }\n/* harmony export */ });\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"?82df\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"?b0ac\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/.pnpm/tailwind-merge@2.5.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n// A function to parse frontmatter from .mdx files.\nfunction fm(y) {\n    const p = /---\\s*([\\s\\S]*?)\\s*---/;\n    const x = p.exec(y);\n    const m = x[1];\n    const c = y.replace(p, \"\").trim();\n    const l = m.trim().split(\"\\n\");\n    const md = {};\n    l.forEach((line)=>{\n        const [x, ...y] = line.split(\": \");\n        let v = y.join(\": \").trim();\n        v = v.replace(/^['\"](.*)['\"]$/, \"$1\");\n        md[x.trim()] = v;\n    });\n    return {\n        metadata: md,\n        content: c\n    };\n}\n// A function to get all posts from the blog directory.\nfunction getPosts() {\n    const d = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"app\", \"blog\", \"posts\");\n    const x = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(d).filter((y)=>path__WEBPACK_IMPORTED_MODULE_2___default().extname(y) === \".mdx\").map((y)=>{\n        const { metadata, content } = fm(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(d, y), \"utf-8\"));\n        const slug = path__WEBPACK_IMPORTED_MODULE_2___default().basename(y, path__WEBPACK_IMPORTED_MODULE_2___default().extname(y));\n        return {\n            metadata,\n            slug,\n            content\n        };\n    });\n    return x;\n}\n// A function to evaluate and merge tw classnames.\nfunction cn() {\n    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){\n        inputs[_key] = arguments[_key];\n    }\n    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_3__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));\n}\n// A function to format a date with options. \n// Param d=date(string) is the date to be formatted.\n// Param e=relative(boolean) outputs a relative date.\nfunction d(d) {\n    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;\n    const t = new Date(d);\n    const f = t.toLocaleString(\"en-us\", {\n        month: \"long\",\n        day: \"numeric\",\n        year: \"numeric\"\n    });\n    // If not relative (most common use case), \n    // return date here and save processing time.\n    if (!e) {\n        return f;\n    }\n    const n = new Date();\n    const Y = n.getFullYear() - t.getFullYear();\n    const M = n.getMonth() - t.getMonth();\n    const D = n.getDate() - t.getDate();\n    let x = \"\";\n    if (Y > 0) {\n        x = \"\".concat(Y, \" \").concat(Y > 1 ? \"years\" : \"year\", \" ago\");\n    } else if (M > 0) {\n        x = \"\".concat(M, \" \").concat(M > 1 ? \"months\" : \"month\", \" ago\");\n    } else if (D > 0) {\n        x = \"\".concat(D, \" \").concat(D > 1 ? \"days\" : \"day\", \" ago\");\n    } else {\n        x = \"Today\";\n    }\n    // Return relative date\n    return x;\n}\n// A function to generate an approximated reading time.\n// Param x=content(string) is the content.\nfunction rt(x) {\n    const w = x.trim().split(/\\s+/).length;\n    const m = w / 200;\n    const d = Math.ceil(m);\n    return \"\".concat(d, \" min read\");\n}\n// A function to generate bytes\n// Param b=bytes(number) is the file character length.\nfunction gb(b) {\n    if (b === 0) {\n        return \"0 Bytes\";\n    }\n    const k = 1024;\n    const i = Math.floor(Math.log(b) / Math.log(k));\n    const s = [\n        \" Bytes\",\n        \" KB\",\n        \" MB\",\n        \" GB\"\n    ];\n    return \"\".concat(parseFloat((b / Math.pow(k, i)).toFixed(2)) + s[i]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtJQUNOO0lBQ0EsdUJBQXVCO0lBQ3ZCLE9BQU9BO0FBQ1Q7QUFDQSx1REFBdUQ7QUFDdkQsMENBQTBDO0FBQ25DLFNBQVMyQyxHQUFHM0MsQ0FBUztJQUMxQixNQUFNNEMsSUFBSTVDLEVBQUVLLElBQUksR0FBR0UsS0FBSyxDQUFDLE9BQU9zQyxNQUFNO0lBQ3RDLE1BQU0zQyxJQUFJMEMsSUFBSTtJQUNkLE1BQU01QixJQUFJOEIsS0FBS0MsSUFBSSxDQUFDN0M7SUFDcEIsT0FBTyxHQUFLLE9BQUZjLEdBQUU7QUFDZDtBQUNBLCtCQUErQjtBQUMvQixzREFBc0Q7QUFDL0MsU0FBU2dDLEdBQUdDLENBQVM7SUFDMUIsSUFBSUEsTUFBTSxHQUFHO1FBQ1gsT0FBTztJQUNUO0lBQ0EsTUFBTUMsSUFBSTtJQUNWLE1BQU1DLElBQUlMLEtBQUtNLEtBQUssQ0FBQ04sS0FBS08sR0FBRyxDQUFDSixLQUFLSCxLQUFLTyxHQUFHLENBQUNIO0lBQzVDLE1BQU1JLElBQUk7UUFBQztRQUFVO1FBQU87UUFBUTtLQUFNO0lBRTFDLE9BQU8sR0FBc0QsT0FBbkRDLFdBQVcsQ0FBQ04sSUFBSUgsS0FBS1UsR0FBRyxDQUFDTixHQUFHQyxFQUFDLEVBQUdNLE9BQU8sQ0FBQyxNQUFNSCxDQUFDLENBQUNILEVBQUU7QUFDOUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzL2luZGV4LnRzPzE1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBNZHhNZXRhZGF0YSB9IGZyb20gJ0AvdHlwZXMnO1xuaW1wb3J0IHsgdHlwZSBDbGFzc1ZhbHVlLCBjbHN4IH0gZnJvbSAnY2xzeCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSAndGFpbHdpbmQtbWVyZ2UnO1xuXG4vLyBBIGZ1bmN0aW9uIHRvIHBhcnNlIGZyb250bWF0dGVyIGZyb20gLm1keCBmaWxlcy5cbmZ1bmN0aW9uIGZtKHk6IHN0cmluZykge1xuICAgIGNvbnN0IHAgPSAvLS0tXFxzKihbXFxzXFxTXSo/KVxccyotLS0vXG4gICAgY29uc3QgeCA9IHAuZXhlYyh5KVxuICAgIGNvbnN0IG0gPSB4IVsxXVxuICAgIGNvbnN0IGMgPSB5LnJlcGxhY2UocCwgJycpLnRyaW0oKVxuICAgIGNvbnN0IGwgPSBtLnRyaW0oKS5zcGxpdCgnXFxuJylcbiAgICBjb25zdCBtZDogUGFydGlhbDxNZHhNZXRhZGF0YT4gPSB7fVxuICBcbiAgICBsLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgIGNvbnN0IFt4LCAuLi55XSA9IGxpbmUuc3BsaXQoJzogJylcbiAgICAgIGxldCB2ID0geS5qb2luKCc6ICcpLnRyaW0oKVxuICAgICAgdiA9IHYucmVwbGFjZSgvXlsnXCJdKC4qKVsnXCJdJC8sICckMScpXG4gICAgICBtZFt4LnRyaW0oKSBhcyBrZXlvZiBNZHhNZXRhZGF0YV0gPSB2XG4gICAgfSlcbiAgXG4gICAgcmV0dXJuIHsgbWV0YWRhdGE6IG1kIGFzIE1keE1ldGFkYXRhLCBjb250ZW50OiBjIGFzIHN0cmluZyB9XG4gIH1cbiAgLy8gQSBmdW5jdGlvbiB0byBnZXQgYWxsIHBvc3RzIGZyb20gdGhlIGJsb2cgZGlyZWN0b3J5LlxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gICAgY29uc3QgZCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnYXBwJywgJ2Jsb2cnLCAncG9zdHMnKVxuICAgIGNvbnN0IHggPSBmc1xuICAgICAgLnJlYWRkaXJTeW5jKGQpXG4gICAgICAuZmlsdGVyKCh5KSA9PiBwYXRoLmV4dG5hbWUoeSkgPT09ICcubWR4JylcbiAgICAgIC5tYXAoKHkpID0+IHtcbiAgICAgICAgY29uc3QgeyBtZXRhZGF0YSwgY29udGVudCB9ID0gZm0oXG4gICAgICAgICAgZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihkLCB5KSwgJ3V0Zi04JylcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBzbHVnID0gcGF0aC5iYXNlbmFtZSh5LCBwYXRoLmV4dG5hbWUoeSkpXG4gIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgICAgICBzbHVnLFxuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgcmV0dXJuIHhcbiAgfVxuXG4vLyBBIGZ1bmN0aW9uIHRvIGV2YWx1YXRlIGFuZCBtZXJnZSB0dyBjbGFzc25hbWVzLlxuZXhwb3J0IGZ1bmN0aW9uIGNuKC4uLmlucHV0czogQ2xhc3NWYWx1ZVtdKSB7XG4gIHJldHVybiB0d01lcmdlKGNsc3goaW5wdXRzKSlcbn1cbi8vIEEgZnVuY3Rpb24gdG8gZm9ybWF0IGEgZGF0ZSB3aXRoIG9wdGlvbnMuIFxuLy8gUGFyYW0gZD1kYXRlKHN0cmluZykgaXMgdGhlIGRhdGUgdG8gYmUgZm9ybWF0dGVkLlxuLy8gUGFyYW0gZT1yZWxhdGl2ZShib29sZWFuKSBvdXRwdXRzIGEgcmVsYXRpdmUgZGF0ZS5cbmV4cG9ydCBmdW5jdGlvbiBkKGQ6IHN0cmluZywgZT1mYWxzZSkge1xuICBjb25zdCB0ID0gbmV3IERhdGUoZClcblxuICBjb25zdCBmID0gdC50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHtcbiAgICBtb250aDogXCJsb25nXCIsXG4gICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgfSlcbiAgLy8gSWYgbm90IHJlbGF0aXZlIChtb3N0IGNvbW1vbiB1c2UgY2FzZSksIFxuICAvLyByZXR1cm4gZGF0ZSBoZXJlIGFuZCBzYXZlIHByb2Nlc3NpbmcgdGltZS5cbiAgaWYgKCFlKSB7XG4gICAgcmV0dXJuIGZcbiAgfVxuXG4gIGNvbnN0IG4gPSBuZXcgRGF0ZSgpXG5cbiAgY29uc3QgWSA9IG4uZ2V0RnVsbFllYXIoKSAtIHQuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBNID0gbi5nZXRNb250aCgpIC0gdC5nZXRNb250aCgpXG4gIGNvbnN0IEQgPSBuLmdldERhdGUoKSAtIHQuZ2V0RGF0ZSgpXG5cbiAgbGV0IHggPSBcIlwiXG5cbiAgaWYgKFkgPiAwKSB7XG4gICAgeCA9IGAke1l9ICR7WSA+IDEgPyBcInllYXJzXCIgOiBcInllYXJcIn0gYWdvYFxuICB9IGVsc2UgaWYgKE0gPiAwKSB7XG4gICAgeCA9IGAke019ICR7TSA+IDEgPyBcIm1vbnRoc1wiIDogXCJtb250aFwifSBhZ29gXG4gIH0gZWxzZSBpZiAoRCA+IDApIHtcbiAgICB4ID0gYCR7RH0gJHtEID4gMSA/IFwiZGF5c1wiIDogXCJkYXlcIn0gYWdvYFxuICB9IGVsc2Uge1xuICAgIHggPSBcIlRvZGF5XCJcbiAgfVxuICAvLyBSZXR1cm4gcmVsYXRpdmUgZGF0ZVxuICByZXR1cm4geFxufVxuLy8gQSBmdW5jdGlvbiB0byBnZW5lcmF0ZSBhbiBhcHByb3hpbWF0ZWQgcmVhZGluZyB0aW1lLlxuLy8gUGFyYW0geD1jb250ZW50KHN0cmluZykgaXMgdGhlIGNvbnRlbnQuXG5leHBvcnQgZnVuY3Rpb24gcnQoeDogc3RyaW5nKSB7XG4gIGNvbnN0IHcgPSB4LnRyaW0oKS5zcGxpdCgvXFxzKy8pLmxlbmd0aFxuICBjb25zdCBtID0gdyAvIDIwMFxuICBjb25zdCBkID0gTWF0aC5jZWlsKG0pXG4gIHJldHVybiBgJHtkfSBtaW4gcmVhZGBcbn1cbi8vIEEgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgYnl0ZXNcbi8vIFBhcmFtIGI9Ynl0ZXMobnVtYmVyKSBpcyB0aGUgZmlsZSBjaGFyYWN0ZXIgbGVuZ3RoLlxuZXhwb3J0IGZ1bmN0aW9uIGdiKGI6IG51bWJlcikge1xuICBpZiAoYiA9PT0gMCkge1xuICAgIHJldHVybiAnMCBCeXRlcydcbiAgfVxuICBjb25zdCBrID0gMTAyNFxuICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhiKSAvIE1hdGgubG9nKGspKVxuICBjb25zdCBzID0gWycgQnl0ZXMnLCAnIEtCJywgJyBNQicgLCAnIEdCJ10gXG5cbiAgcmV0dXJuIGAke3BhcnNlRmxvYXQoKGIgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZCgyKSkgKyBzW2ldfWBcbn0iXSwibmFtZXMiOlsiY2xzeCIsImZzIiwicGF0aCIsInR3TWVyZ2UiLCJmbSIsInkiLCJwIiwieCIsImV4ZWMiLCJtIiwiYyIsInJlcGxhY2UiLCJ0cmltIiwibCIsInNwbGl0IiwibWQiLCJmb3JFYWNoIiwibGluZSIsInYiLCJqb2luIiwibWV0YWRhdGEiLCJjb250ZW50IiwiZ2V0UG9zdHMiLCJkIiwicHJvY2VzcyIsImN3ZCIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwiZXh0bmFtZSIsIm1hcCIsInJlYWRGaWxlU3luYyIsInNsdWciLCJiYXNlbmFtZSIsImNuIiwiaW5wdXRzIiwiZSIsInQiLCJEYXRlIiwiZiIsInRvTG9jYWxlU3RyaW5nIiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwibiIsIlkiLCJnZXRGdWxsWWVhciIsIk0iLCJnZXRNb250aCIsIkQiLCJnZXREYXRlIiwicnQiLCJ3IiwibGVuZ3RoIiwiTWF0aCIsImNlaWwiLCJnYiIsImIiLCJrIiwiaSIsImZsb29yIiwibG9nIiwicyIsInBhcnNlRmxvYXQiLCJwb3ciLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/utils/index.ts\n"));

/***/ })

});