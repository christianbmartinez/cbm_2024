"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ansi-styles@3.2.1";
exports.ids = ["vendor-chunks/ansi-styles@3.2.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/ansi-styles@3.2.1/node_modules/ansi-styles/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/ansi-styles@3.2.1/node_modules/ansi-styles/index.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nconst colorConvert = __webpack_require__(/*! color-convert */ \"(ssr)/./node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/index.js\");\n\nconst wrapAnsi16 = (fn, offset) => function () {\n\tconst code = fn.apply(colorConvert, arguments);\n\treturn `\\u001B[${code + offset}m`;\n};\n\nconst wrapAnsi256 = (fn, offset) => function () {\n\tconst code = fn.apply(colorConvert, arguments);\n\treturn `\\u001B[${38 + offset};5;${code}m`;\n};\n\nconst wrapAnsi16m = (fn, offset) => function () {\n\tconst rgb = fn.apply(colorConvert, arguments);\n\treturn `\\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;\n};\n\nfunction assembleStyles() {\n\tconst codes = new Map();\n\tconst styles = {\n\t\tmodifier: {\n\t\t\treset: [0, 0],\n\t\t\t// 21 isn't widely supported and 22 does the same thing\n\t\t\tbold: [1, 22],\n\t\t\tdim: [2, 22],\n\t\t\titalic: [3, 23],\n\t\t\tunderline: [4, 24],\n\t\t\tinverse: [7, 27],\n\t\t\thidden: [8, 28],\n\t\t\tstrikethrough: [9, 29]\n\t\t},\n\t\tcolor: {\n\t\t\tblack: [30, 39],\n\t\t\tred: [31, 39],\n\t\t\tgreen: [32, 39],\n\t\t\tyellow: [33, 39],\n\t\t\tblue: [34, 39],\n\t\t\tmagenta: [35, 39],\n\t\t\tcyan: [36, 39],\n\t\t\twhite: [37, 39],\n\t\t\tgray: [90, 39],\n\n\t\t\t// Bright color\n\t\t\tredBright: [91, 39],\n\t\t\tgreenBright: [92, 39],\n\t\t\tyellowBright: [93, 39],\n\t\t\tblueBright: [94, 39],\n\t\t\tmagentaBright: [95, 39],\n\t\t\tcyanBright: [96, 39],\n\t\t\twhiteBright: [97, 39]\n\t\t},\n\t\tbgColor: {\n\t\t\tbgBlack: [40, 49],\n\t\t\tbgRed: [41, 49],\n\t\t\tbgGreen: [42, 49],\n\t\t\tbgYellow: [43, 49],\n\t\t\tbgBlue: [44, 49],\n\t\t\tbgMagenta: [45, 49],\n\t\t\tbgCyan: [46, 49],\n\t\t\tbgWhite: [47, 49],\n\n\t\t\t// Bright color\n\t\t\tbgBlackBright: [100, 49],\n\t\t\tbgRedBright: [101, 49],\n\t\t\tbgGreenBright: [102, 49],\n\t\t\tbgYellowBright: [103, 49],\n\t\t\tbgBlueBright: [104, 49],\n\t\t\tbgMagentaBright: [105, 49],\n\t\t\tbgCyanBright: [106, 49],\n\t\t\tbgWhiteBright: [107, 49]\n\t\t}\n\t};\n\n\t// Fix humans\n\tstyles.color.grey = styles.color.gray;\n\n\tfor (const groupName of Object.keys(styles)) {\n\t\tconst group = styles[groupName];\n\n\t\tfor (const styleName of Object.keys(group)) {\n\t\t\tconst style = group[styleName];\n\n\t\t\tstyles[styleName] = {\n\t\t\t\topen: `\\u001B[${style[0]}m`,\n\t\t\t\tclose: `\\u001B[${style[1]}m`\n\t\t\t};\n\n\t\t\tgroup[styleName] = styles[styleName];\n\n\t\t\tcodes.set(style[0], style[1]);\n\t\t}\n\n\t\tObject.defineProperty(styles, groupName, {\n\t\t\tvalue: group,\n\t\t\tenumerable: false\n\t\t});\n\n\t\tObject.defineProperty(styles, 'codes', {\n\t\t\tvalue: codes,\n\t\t\tenumerable: false\n\t\t});\n\t}\n\n\tconst ansi2ansi = n => n;\n\tconst rgb2rgb = (r, g, b) => [r, g, b];\n\n\tstyles.color.close = '\\u001B[39m';\n\tstyles.bgColor.close = '\\u001B[49m';\n\n\tstyles.color.ansi = {\n\t\tansi: wrapAnsi16(ansi2ansi, 0)\n\t};\n\tstyles.color.ansi256 = {\n\t\tansi256: wrapAnsi256(ansi2ansi, 0)\n\t};\n\tstyles.color.ansi16m = {\n\t\trgb: wrapAnsi16m(rgb2rgb, 0)\n\t};\n\n\tstyles.bgColor.ansi = {\n\t\tansi: wrapAnsi16(ansi2ansi, 10)\n\t};\n\tstyles.bgColor.ansi256 = {\n\t\tansi256: wrapAnsi256(ansi2ansi, 10)\n\t};\n\tstyles.bgColor.ansi16m = {\n\t\trgb: wrapAnsi16m(rgb2rgb, 10)\n\t};\n\n\tfor (let key of Object.keys(colorConvert)) {\n\t\tif (typeof colorConvert[key] !== 'object') {\n\t\t\tcontinue;\n\t\t}\n\n\t\tconst suite = colorConvert[key];\n\n\t\tif (key === 'ansi16') {\n\t\t\tkey = 'ansi';\n\t\t}\n\n\t\tif ('ansi16' in suite) {\n\t\t\tstyles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);\n\t\t\tstyles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);\n\t\t}\n\n\t\tif ('ansi256' in suite) {\n\t\t\tstyles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);\n\t\t\tstyles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);\n\t\t}\n\n\t\tif ('rgb' in suite) {\n\t\t\tstyles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);\n\t\t\tstyles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);\n\t\t}\n\t}\n\n\treturn styles;\n}\n\n// Make the export immutable\nObject.defineProperty(module, 'exports', {\n\tenumerable: true,\n\tget: assembleStyles\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vYW5zaS1zdHlsZXNAMy4yLjEvbm9kZV9tb2R1bGVzL2Fuc2ktc3R5bGVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBYTtBQUNiLHFCQUFxQixtQkFBTyxDQUFDLHlHQUFlOztBQUU1QztBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixhQUFhLEVBQUUsRUFBRSxLQUFLO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsYUFBYSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixxQkFBcUIsU0FBUztBQUM5Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2JtXzIwMjQvLi9ub2RlX21vZHVsZXMvLnBucG0vYW5zaS1zdHlsZXNAMy4yLjEvbm9kZV9tb2R1bGVzL2Fuc2ktc3R5bGVzL2luZGV4LmpzPzk5ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgY29sb3JDb252ZXJ0ID0gcmVxdWlyZSgnY29sb3ItY29udmVydCcpO1xuXG5jb25zdCB3cmFwQW5zaTE2ID0gKGZuLCBvZmZzZXQpID0+IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY29kZSA9IGZuLmFwcGx5KGNvbG9yQ29udmVydCwgYXJndW1lbnRzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7Y29kZSArIG9mZnNldH1tYDtcbn07XG5cbmNvbnN0IHdyYXBBbnNpMjU2ID0gKGZuLCBvZmZzZXQpID0+IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY29kZSA9IGZuLmFwcGx5KGNvbG9yQ29udmVydCwgYXJndW1lbnRzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7MzggKyBvZmZzZXR9OzU7JHtjb2RlfW1gO1xufTtcblxuY29uc3Qgd3JhcEFuc2kxNm0gPSAoZm4sIG9mZnNldCkgPT4gZnVuY3Rpb24gKCkge1xuXHRjb25zdCByZ2IgPSBmbi5hcHBseShjb2xvckNvbnZlcnQsIGFyZ3VtZW50cyk7XG5cdHJldHVybiBgXFx1MDAxQlskezM4ICsgb2Zmc2V0fTsyOyR7cmdiWzBdfTske3JnYlsxXX07JHtyZ2JbMl19bWA7XG59O1xuXG5mdW5jdGlvbiBhc3NlbWJsZVN0eWxlcygpIHtcblx0Y29uc3QgY29kZXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRtb2RpZmllcjoge1xuXHRcdFx0cmVzZXQ6IFswLCAwXSxcblx0XHRcdC8vIDIxIGlzbid0IHdpZGVseSBzdXBwb3J0ZWQgYW5kIDIyIGRvZXMgdGhlIHNhbWUgdGhpbmdcblx0XHRcdGJvbGQ6IFsxLCAyMl0sXG5cdFx0XHRkaW06IFsyLCAyMl0sXG5cdFx0XHRpdGFsaWM6IFszLCAyM10sXG5cdFx0XHR1bmRlcmxpbmU6IFs0LCAyNF0sXG5cdFx0XHRpbnZlcnNlOiBbNywgMjddLFxuXHRcdFx0aGlkZGVuOiBbOCwgMjhdLFxuXHRcdFx0c3RyaWtldGhyb3VnaDogWzksIDI5XVxuXHRcdH0sXG5cdFx0Y29sb3I6IHtcblx0XHRcdGJsYWNrOiBbMzAsIDM5XSxcblx0XHRcdHJlZDogWzMxLCAzOV0sXG5cdFx0XHRncmVlbjogWzMyLCAzOV0sXG5cdFx0XHR5ZWxsb3c6IFszMywgMzldLFxuXHRcdFx0Ymx1ZTogWzM0LCAzOV0sXG5cdFx0XHRtYWdlbnRhOiBbMzUsIDM5XSxcblx0XHRcdGN5YW46IFszNiwgMzldLFxuXHRcdFx0d2hpdGU6IFszNywgMzldLFxuXHRcdFx0Z3JheTogWzkwLCAzOV0sXG5cblx0XHRcdC8vIEJyaWdodCBjb2xvclxuXHRcdFx0cmVkQnJpZ2h0OiBbOTEsIDM5XSxcblx0XHRcdGdyZWVuQnJpZ2h0OiBbOTIsIDM5XSxcblx0XHRcdHllbGxvd0JyaWdodDogWzkzLCAzOV0sXG5cdFx0XHRibHVlQnJpZ2h0OiBbOTQsIDM5XSxcblx0XHRcdG1hZ2VudGFCcmlnaHQ6IFs5NSwgMzldLFxuXHRcdFx0Y3lhbkJyaWdodDogWzk2LCAzOV0sXG5cdFx0XHR3aGl0ZUJyaWdodDogWzk3LCAzOV1cblx0XHR9LFxuXHRcdGJnQ29sb3I6IHtcblx0XHRcdGJnQmxhY2s6IFs0MCwgNDldLFxuXHRcdFx0YmdSZWQ6IFs0MSwgNDldLFxuXHRcdFx0YmdHcmVlbjogWzQyLCA0OV0sXG5cdFx0XHRiZ1llbGxvdzogWzQzLCA0OV0sXG5cdFx0XHRiZ0JsdWU6IFs0NCwgNDldLFxuXHRcdFx0YmdNYWdlbnRhOiBbNDUsIDQ5XSxcblx0XHRcdGJnQ3lhbjogWzQ2LCA0OV0sXG5cdFx0XHRiZ1doaXRlOiBbNDcsIDQ5XSxcblxuXHRcdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0XHRiZ0JsYWNrQnJpZ2h0OiBbMTAwLCA0OV0sXG5cdFx0XHRiZ1JlZEJyaWdodDogWzEwMSwgNDldLFxuXHRcdFx0YmdHcmVlbkJyaWdodDogWzEwMiwgNDldLFxuXHRcdFx0YmdZZWxsb3dCcmlnaHQ6IFsxMDMsIDQ5XSxcblx0XHRcdGJnQmx1ZUJyaWdodDogWzEwNCwgNDldLFxuXHRcdFx0YmdNYWdlbnRhQnJpZ2h0OiBbMTA1LCA0OV0sXG5cdFx0XHRiZ0N5YW5CcmlnaHQ6IFsxMDYsIDQ5XSxcblx0XHRcdGJnV2hpdGVCcmlnaHQ6IFsxMDcsIDQ5XVxuXHRcdH1cblx0fTtcblxuXHQvLyBGaXggaHVtYW5zXG5cdHN0eWxlcy5jb2xvci5ncmV5ID0gc3R5bGVzLmNvbG9yLmdyYXk7XG5cblx0Zm9yIChjb25zdCBncm91cE5hbWUgb2YgT2JqZWN0LmtleXMoc3R5bGVzKSkge1xuXHRcdGNvbnN0IGdyb3VwID0gc3R5bGVzW2dyb3VwTmFtZV07XG5cblx0XHRmb3IgKGNvbnN0IHN0eWxlTmFtZSBvZiBPYmplY3Qua2V5cyhncm91cCkpIHtcblx0XHRcdGNvbnN0IHN0eWxlID0gZ3JvdXBbc3R5bGVOYW1lXTtcblxuXHRcdFx0c3R5bGVzW3N0eWxlTmFtZV0gPSB7XG5cdFx0XHRcdG9wZW46IGBcXHUwMDFCWyR7c3R5bGVbMF19bWAsXG5cdFx0XHRcdGNsb3NlOiBgXFx1MDAxQlske3N0eWxlWzFdfW1gXG5cdFx0XHR9O1xuXG5cdFx0XHRncm91cFtzdHlsZU5hbWVdID0gc3R5bGVzW3N0eWxlTmFtZV07XG5cblx0XHRcdGNvZGVzLnNldChzdHlsZVswXSwgc3R5bGVbMV0pO1xuXHRcdH1cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsIGdyb3VwTmFtZSwge1xuXHRcdFx0dmFsdWU6IGdyb3VwLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2Vcblx0XHR9KTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsICdjb2RlcycsIHtcblx0XHRcdHZhbHVlOiBjb2Rlcyxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBhbnNpMmFuc2kgPSBuID0+IG47XG5cdGNvbnN0IHJnYjJyZ2IgPSAociwgZywgYikgPT4gW3IsIGcsIGJdO1xuXG5cdHN0eWxlcy5jb2xvci5jbG9zZSA9ICdcXHUwMDFCWzM5bSc7XG5cdHN0eWxlcy5iZ0NvbG9yLmNsb3NlID0gJ1xcdTAwMUJbNDltJztcblxuXHRzdHlsZXMuY29sb3IuYW5zaSA9IHtcblx0XHRhbnNpOiB3cmFwQW5zaTE2KGFuc2kyYW5zaSwgMClcblx0fTtcblx0c3R5bGVzLmNvbG9yLmFuc2kyNTYgPSB7XG5cdFx0YW5zaTI1Njogd3JhcEFuc2kyNTYoYW5zaTJhbnNpLCAwKVxuXHR9O1xuXHRzdHlsZXMuY29sb3IuYW5zaTE2bSA9IHtcblx0XHRyZ2I6IHdyYXBBbnNpMTZtKHJnYjJyZ2IsIDApXG5cdH07XG5cblx0c3R5bGVzLmJnQ29sb3IuYW5zaSA9IHtcblx0XHRhbnNpOiB3cmFwQW5zaTE2KGFuc2kyYW5zaSwgMTApXG5cdH07XG5cdHN0eWxlcy5iZ0NvbG9yLmFuc2kyNTYgPSB7XG5cdFx0YW5zaTI1Njogd3JhcEFuc2kyNTYoYW5zaTJhbnNpLCAxMClcblx0fTtcblx0c3R5bGVzLmJnQ29sb3IuYW5zaTE2bSA9IHtcblx0XHRyZ2I6IHdyYXBBbnNpMTZtKHJnYjJyZ2IsIDEwKVxuXHR9O1xuXG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhjb2xvckNvbnZlcnQpKSB7XG5cdFx0aWYgKHR5cGVvZiBjb2xvckNvbnZlcnRba2V5XSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1aXRlID0gY29sb3JDb252ZXJ0W2tleV07XG5cblx0XHRpZiAoa2V5ID09PSAnYW5zaTE2Jykge1xuXHRcdFx0a2V5ID0gJ2Fuc2knO1xuXHRcdH1cblxuXHRcdGlmICgnYW5zaTE2JyBpbiBzdWl0ZSkge1xuXHRcdFx0c3R5bGVzLmNvbG9yLmFuc2lba2V5XSA9IHdyYXBBbnNpMTYoc3VpdGUuYW5zaTE2LCAwKTtcblx0XHRcdHN0eWxlcy5iZ0NvbG9yLmFuc2lba2V5XSA9IHdyYXBBbnNpMTYoc3VpdGUuYW5zaTE2LCAxMCk7XG5cdFx0fVxuXG5cdFx0aWYgKCdhbnNpMjU2JyBpbiBzdWl0ZSkge1xuXHRcdFx0c3R5bGVzLmNvbG9yLmFuc2kyNTZba2V5XSA9IHdyYXBBbnNpMjU2KHN1aXRlLmFuc2kyNTYsIDApO1xuXHRcdFx0c3R5bGVzLmJnQ29sb3IuYW5zaTI1NltrZXldID0gd3JhcEFuc2kyNTYoc3VpdGUuYW5zaTI1NiwgMTApO1xuXHRcdH1cblxuXHRcdGlmICgncmdiJyBpbiBzdWl0ZSkge1xuXHRcdFx0c3R5bGVzLmNvbG9yLmFuc2kxNm1ba2V5XSA9IHdyYXBBbnNpMTZtKHN1aXRlLnJnYiwgMCk7XG5cdFx0XHRzdHlsZXMuYmdDb2xvci5hbnNpMTZtW2tleV0gPSB3cmFwQW5zaTE2bShzdWl0ZS5yZ2IsIDEwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG4vLyBNYWtlIHRoZSBleHBvcnQgaW1tdXRhYmxlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0Z2V0OiBhc3NlbWJsZVN0eWxlc1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/ansi-styles@3.2.1/node_modules/ansi-styles/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/ansi-styles@3.2.1/node_modules/ansi-styles/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/ansi-styles@3.2.1/node_modules/ansi-styles/index.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nconst colorConvert = __webpack_require__(/*! color-convert */ \"(rsc)/./node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/index.js\");\n\nconst wrapAnsi16 = (fn, offset) => function () {\n\tconst code = fn.apply(colorConvert, arguments);\n\treturn `\\u001B[${code + offset}m`;\n};\n\nconst wrapAnsi256 = (fn, offset) => function () {\n\tconst code = fn.apply(colorConvert, arguments);\n\treturn `\\u001B[${38 + offset};5;${code}m`;\n};\n\nconst wrapAnsi16m = (fn, offset) => function () {\n\tconst rgb = fn.apply(colorConvert, arguments);\n\treturn `\\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;\n};\n\nfunction assembleStyles() {\n\tconst codes = new Map();\n\tconst styles = {\n\t\tmodifier: {\n\t\t\treset: [0, 0],\n\t\t\t// 21 isn't widely supported and 22 does the same thing\n\t\t\tbold: [1, 22],\n\t\t\tdim: [2, 22],\n\t\t\titalic: [3, 23],\n\t\t\tunderline: [4, 24],\n\t\t\tinverse: [7, 27],\n\t\t\thidden: [8, 28],\n\t\t\tstrikethrough: [9, 29]\n\t\t},\n\t\tcolor: {\n\t\t\tblack: [30, 39],\n\t\t\tred: [31, 39],\n\t\t\tgreen: [32, 39],\n\t\t\tyellow: [33, 39],\n\t\t\tblue: [34, 39],\n\t\t\tmagenta: [35, 39],\n\t\t\tcyan: [36, 39],\n\t\t\twhite: [37, 39],\n\t\t\tgray: [90, 39],\n\n\t\t\t// Bright color\n\t\t\tredBright: [91, 39],\n\t\t\tgreenBright: [92, 39],\n\t\t\tyellowBright: [93, 39],\n\t\t\tblueBright: [94, 39],\n\t\t\tmagentaBright: [95, 39],\n\t\t\tcyanBright: [96, 39],\n\t\t\twhiteBright: [97, 39]\n\t\t},\n\t\tbgColor: {\n\t\t\tbgBlack: [40, 49],\n\t\t\tbgRed: [41, 49],\n\t\t\tbgGreen: [42, 49],\n\t\t\tbgYellow: [43, 49],\n\t\t\tbgBlue: [44, 49],\n\t\t\tbgMagenta: [45, 49],\n\t\t\tbgCyan: [46, 49],\n\t\t\tbgWhite: [47, 49],\n\n\t\t\t// Bright color\n\t\t\tbgBlackBright: [100, 49],\n\t\t\tbgRedBright: [101, 49],\n\t\t\tbgGreenBright: [102, 49],\n\t\t\tbgYellowBright: [103, 49],\n\t\t\tbgBlueBright: [104, 49],\n\t\t\tbgMagentaBright: [105, 49],\n\t\t\tbgCyanBright: [106, 49],\n\t\t\tbgWhiteBright: [107, 49]\n\t\t}\n\t};\n\n\t// Fix humans\n\tstyles.color.grey = styles.color.gray;\n\n\tfor (const groupName of Object.keys(styles)) {\n\t\tconst group = styles[groupName];\n\n\t\tfor (const styleName of Object.keys(group)) {\n\t\t\tconst style = group[styleName];\n\n\t\t\tstyles[styleName] = {\n\t\t\t\topen: `\\u001B[${style[0]}m`,\n\t\t\t\tclose: `\\u001B[${style[1]}m`\n\t\t\t};\n\n\t\t\tgroup[styleName] = styles[styleName];\n\n\t\t\tcodes.set(style[0], style[1]);\n\t\t}\n\n\t\tObject.defineProperty(styles, groupName, {\n\t\t\tvalue: group,\n\t\t\tenumerable: false\n\t\t});\n\n\t\tObject.defineProperty(styles, 'codes', {\n\t\t\tvalue: codes,\n\t\t\tenumerable: false\n\t\t});\n\t}\n\n\tconst ansi2ansi = n => n;\n\tconst rgb2rgb = (r, g, b) => [r, g, b];\n\n\tstyles.color.close = '\\u001B[39m';\n\tstyles.bgColor.close = '\\u001B[49m';\n\n\tstyles.color.ansi = {\n\t\tansi: wrapAnsi16(ansi2ansi, 0)\n\t};\n\tstyles.color.ansi256 = {\n\t\tansi256: wrapAnsi256(ansi2ansi, 0)\n\t};\n\tstyles.color.ansi16m = {\n\t\trgb: wrapAnsi16m(rgb2rgb, 0)\n\t};\n\n\tstyles.bgColor.ansi = {\n\t\tansi: wrapAnsi16(ansi2ansi, 10)\n\t};\n\tstyles.bgColor.ansi256 = {\n\t\tansi256: wrapAnsi256(ansi2ansi, 10)\n\t};\n\tstyles.bgColor.ansi16m = {\n\t\trgb: wrapAnsi16m(rgb2rgb, 10)\n\t};\n\n\tfor (let key of Object.keys(colorConvert)) {\n\t\tif (typeof colorConvert[key] !== 'object') {\n\t\t\tcontinue;\n\t\t}\n\n\t\tconst suite = colorConvert[key];\n\n\t\tif (key === 'ansi16') {\n\t\t\tkey = 'ansi';\n\t\t}\n\n\t\tif ('ansi16' in suite) {\n\t\t\tstyles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);\n\t\t\tstyles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);\n\t\t}\n\n\t\tif ('ansi256' in suite) {\n\t\t\tstyles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);\n\t\t\tstyles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);\n\t\t}\n\n\t\tif ('rgb' in suite) {\n\t\t\tstyles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);\n\t\t\tstyles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);\n\t\t}\n\t}\n\n\treturn styles;\n}\n\n// Make the export immutable\nObject.defineProperty(module, 'exports', {\n\tenumerable: true,\n\tget: assembleStyles\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vYW5zaS1zdHlsZXNAMy4yLjEvbm9kZV9tb2R1bGVzL2Fuc2ktc3R5bGVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBYTtBQUNiLHFCQUFxQixtQkFBTyxDQUFDLHlHQUFlOztBQUU1QztBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixhQUFhLEVBQUUsRUFBRSxLQUFLO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsYUFBYSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixxQkFBcUIsU0FBUztBQUM5Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2JtXzIwMjQvLi9ub2RlX21vZHVsZXMvLnBucG0vYW5zaS1zdHlsZXNAMy4yLjEvbm9kZV9tb2R1bGVzL2Fuc2ktc3R5bGVzL2luZGV4LmpzP2RmOTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgY29sb3JDb252ZXJ0ID0gcmVxdWlyZSgnY29sb3ItY29udmVydCcpO1xuXG5jb25zdCB3cmFwQW5zaTE2ID0gKGZuLCBvZmZzZXQpID0+IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY29kZSA9IGZuLmFwcGx5KGNvbG9yQ29udmVydCwgYXJndW1lbnRzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7Y29kZSArIG9mZnNldH1tYDtcbn07XG5cbmNvbnN0IHdyYXBBbnNpMjU2ID0gKGZuLCBvZmZzZXQpID0+IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY29kZSA9IGZuLmFwcGx5KGNvbG9yQ29udmVydCwgYXJndW1lbnRzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7MzggKyBvZmZzZXR9OzU7JHtjb2RlfW1gO1xufTtcblxuY29uc3Qgd3JhcEFuc2kxNm0gPSAoZm4sIG9mZnNldCkgPT4gZnVuY3Rpb24gKCkge1xuXHRjb25zdCByZ2IgPSBmbi5hcHBseShjb2xvckNvbnZlcnQsIGFyZ3VtZW50cyk7XG5cdHJldHVybiBgXFx1MDAxQlskezM4ICsgb2Zmc2V0fTsyOyR7cmdiWzBdfTske3JnYlsxXX07JHtyZ2JbMl19bWA7XG59O1xuXG5mdW5jdGlvbiBhc3NlbWJsZVN0eWxlcygpIHtcblx0Y29uc3QgY29kZXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRtb2RpZmllcjoge1xuXHRcdFx0cmVzZXQ6IFswLCAwXSxcblx0XHRcdC8vIDIxIGlzbid0IHdpZGVseSBzdXBwb3J0ZWQgYW5kIDIyIGRvZXMgdGhlIHNhbWUgdGhpbmdcblx0XHRcdGJvbGQ6IFsxLCAyMl0sXG5cdFx0XHRkaW06IFsyLCAyMl0sXG5cdFx0XHRpdGFsaWM6IFszLCAyM10sXG5cdFx0XHR1bmRlcmxpbmU6IFs0LCAyNF0sXG5cdFx0XHRpbnZlcnNlOiBbNywgMjddLFxuXHRcdFx0aGlkZGVuOiBbOCwgMjhdLFxuXHRcdFx0c3RyaWtldGhyb3VnaDogWzksIDI5XVxuXHRcdH0sXG5cdFx0Y29sb3I6IHtcblx0XHRcdGJsYWNrOiBbMzAsIDM5XSxcblx0XHRcdHJlZDogWzMxLCAzOV0sXG5cdFx0XHRncmVlbjogWzMyLCAzOV0sXG5cdFx0XHR5ZWxsb3c6IFszMywgMzldLFxuXHRcdFx0Ymx1ZTogWzM0LCAzOV0sXG5cdFx0XHRtYWdlbnRhOiBbMzUsIDM5XSxcblx0XHRcdGN5YW46IFszNiwgMzldLFxuXHRcdFx0d2hpdGU6IFszNywgMzldLFxuXHRcdFx0Z3JheTogWzkwLCAzOV0sXG5cblx0XHRcdC8vIEJyaWdodCBjb2xvclxuXHRcdFx0cmVkQnJpZ2h0OiBbOTEsIDM5XSxcblx0XHRcdGdyZWVuQnJpZ2h0OiBbOTIsIDM5XSxcblx0XHRcdHllbGxvd0JyaWdodDogWzkzLCAzOV0sXG5cdFx0XHRibHVlQnJpZ2h0OiBbOTQsIDM5XSxcblx0XHRcdG1hZ2VudGFCcmlnaHQ6IFs5NSwgMzldLFxuXHRcdFx0Y3lhbkJyaWdodDogWzk2LCAzOV0sXG5cdFx0XHR3aGl0ZUJyaWdodDogWzk3LCAzOV1cblx0XHR9LFxuXHRcdGJnQ29sb3I6IHtcblx0XHRcdGJnQmxhY2s6IFs0MCwgNDldLFxuXHRcdFx0YmdSZWQ6IFs0MSwgNDldLFxuXHRcdFx0YmdHcmVlbjogWzQyLCA0OV0sXG5cdFx0XHRiZ1llbGxvdzogWzQzLCA0OV0sXG5cdFx0XHRiZ0JsdWU6IFs0NCwgNDldLFxuXHRcdFx0YmdNYWdlbnRhOiBbNDUsIDQ5XSxcblx0XHRcdGJnQ3lhbjogWzQ2LCA0OV0sXG5cdFx0XHRiZ1doaXRlOiBbNDcsIDQ5XSxcblxuXHRcdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0XHRiZ0JsYWNrQnJpZ2h0OiBbMTAwLCA0OV0sXG5cdFx0XHRiZ1JlZEJyaWdodDogWzEwMSwgNDldLFxuXHRcdFx0YmdHcmVlbkJyaWdodDogWzEwMiwgNDldLFxuXHRcdFx0YmdZZWxsb3dCcmlnaHQ6IFsxMDMsIDQ5XSxcblx0XHRcdGJnQmx1ZUJyaWdodDogWzEwNCwgNDldLFxuXHRcdFx0YmdNYWdlbnRhQnJpZ2h0OiBbMTA1LCA0OV0sXG5cdFx0XHRiZ0N5YW5CcmlnaHQ6IFsxMDYsIDQ5XSxcblx0XHRcdGJnV2hpdGVCcmlnaHQ6IFsxMDcsIDQ5XVxuXHRcdH1cblx0fTtcblxuXHQvLyBGaXggaHVtYW5zXG5cdHN0eWxlcy5jb2xvci5ncmV5ID0gc3R5bGVzLmNvbG9yLmdyYXk7XG5cblx0Zm9yIChjb25zdCBncm91cE5hbWUgb2YgT2JqZWN0LmtleXMoc3R5bGVzKSkge1xuXHRcdGNvbnN0IGdyb3VwID0gc3R5bGVzW2dyb3VwTmFtZV07XG5cblx0XHRmb3IgKGNvbnN0IHN0eWxlTmFtZSBvZiBPYmplY3Qua2V5cyhncm91cCkpIHtcblx0XHRcdGNvbnN0IHN0eWxlID0gZ3JvdXBbc3R5bGVOYW1lXTtcblxuXHRcdFx0c3R5bGVzW3N0eWxlTmFtZV0gPSB7XG5cdFx0XHRcdG9wZW46IGBcXHUwMDFCWyR7c3R5bGVbMF19bWAsXG5cdFx0XHRcdGNsb3NlOiBgXFx1MDAxQlske3N0eWxlWzFdfW1gXG5cdFx0XHR9O1xuXG5cdFx0XHRncm91cFtzdHlsZU5hbWVdID0gc3R5bGVzW3N0eWxlTmFtZV07XG5cblx0XHRcdGNvZGVzLnNldChzdHlsZVswXSwgc3R5bGVbMV0pO1xuXHRcdH1cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsIGdyb3VwTmFtZSwge1xuXHRcdFx0dmFsdWU6IGdyb3VwLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2Vcblx0XHR9KTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsICdjb2RlcycsIHtcblx0XHRcdHZhbHVlOiBjb2Rlcyxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBhbnNpMmFuc2kgPSBuID0+IG47XG5cdGNvbnN0IHJnYjJyZ2IgPSAociwgZywgYikgPT4gW3IsIGcsIGJdO1xuXG5cdHN0eWxlcy5jb2xvci5jbG9zZSA9ICdcXHUwMDFCWzM5bSc7XG5cdHN0eWxlcy5iZ0NvbG9yLmNsb3NlID0gJ1xcdTAwMUJbNDltJztcblxuXHRzdHlsZXMuY29sb3IuYW5zaSA9IHtcblx0XHRhbnNpOiB3cmFwQW5zaTE2KGFuc2kyYW5zaSwgMClcblx0fTtcblx0c3R5bGVzLmNvbG9yLmFuc2kyNTYgPSB7XG5cdFx0YW5zaTI1Njogd3JhcEFuc2kyNTYoYW5zaTJhbnNpLCAwKVxuXHR9O1xuXHRzdHlsZXMuY29sb3IuYW5zaTE2bSA9IHtcblx0XHRyZ2I6IHdyYXBBbnNpMTZtKHJnYjJyZ2IsIDApXG5cdH07XG5cblx0c3R5bGVzLmJnQ29sb3IuYW5zaSA9IHtcblx0XHRhbnNpOiB3cmFwQW5zaTE2KGFuc2kyYW5zaSwgMTApXG5cdH07XG5cdHN0eWxlcy5iZ0NvbG9yLmFuc2kyNTYgPSB7XG5cdFx0YW5zaTI1Njogd3JhcEFuc2kyNTYoYW5zaTJhbnNpLCAxMClcblx0fTtcblx0c3R5bGVzLmJnQ29sb3IuYW5zaTE2bSA9IHtcblx0XHRyZ2I6IHdyYXBBbnNpMTZtKHJnYjJyZ2IsIDEwKVxuXHR9O1xuXG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhjb2xvckNvbnZlcnQpKSB7XG5cdFx0aWYgKHR5cGVvZiBjb2xvckNvbnZlcnRba2V5XSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1aXRlID0gY29sb3JDb252ZXJ0W2tleV07XG5cblx0XHRpZiAoa2V5ID09PSAnYW5zaTE2Jykge1xuXHRcdFx0a2V5ID0gJ2Fuc2knO1xuXHRcdH1cblxuXHRcdGlmICgnYW5zaTE2JyBpbiBzdWl0ZSkge1xuXHRcdFx0c3R5bGVzLmNvbG9yLmFuc2lba2V5XSA9IHdyYXBBbnNpMTYoc3VpdGUuYW5zaTE2LCAwKTtcblx0XHRcdHN0eWxlcy5iZ0NvbG9yLmFuc2lba2V5XSA9IHdyYXBBbnNpMTYoc3VpdGUuYW5zaTE2LCAxMCk7XG5cdFx0fVxuXG5cdFx0aWYgKCdhbnNpMjU2JyBpbiBzdWl0ZSkge1xuXHRcdFx0c3R5bGVzLmNvbG9yLmFuc2kyNTZba2V5XSA9IHdyYXBBbnNpMjU2KHN1aXRlLmFuc2kyNTYsIDApO1xuXHRcdFx0c3R5bGVzLmJnQ29sb3IuYW5zaTI1NltrZXldID0gd3JhcEFuc2kyNTYoc3VpdGUuYW5zaTI1NiwgMTApO1xuXHRcdH1cblxuXHRcdGlmICgncmdiJyBpbiBzdWl0ZSkge1xuXHRcdFx0c3R5bGVzLmNvbG9yLmFuc2kxNm1ba2V5XSA9IHdyYXBBbnNpMTZtKHN1aXRlLnJnYiwgMCk7XG5cdFx0XHRzdHlsZXMuYmdDb2xvci5hbnNpMTZtW2tleV0gPSB3cmFwQW5zaTE2bShzdWl0ZS5yZ2IsIDEwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG4vLyBNYWtlIHRoZSBleHBvcnQgaW1tdXRhYmxlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0Z2V0OiBhc3NlbWJsZVN0eWxlc1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/ansi-styles@3.2.1/node_modules/ansi-styles/index.js\n");

/***/ })

};
;