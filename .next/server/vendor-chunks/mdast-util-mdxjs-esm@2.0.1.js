"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-mdxjs-esm@2.0.1";
exports.ids = ["vendor-chunks/mdast-util-mdxjs-esm@2.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/mdast-util-mdxjs-esm@2.0.1/node_modules/mdast-util-mdxjs-esm/lib/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/mdast-util-mdxjs-esm@2.0.1/node_modules/mdast-util-mdxjs-esm/lib/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mdxjsEsmFromMarkdown: () => (/* binding */ mdxjsEsmFromMarkdown),\n/* harmony export */   mdxjsEsmToMarkdown: () => (/* binding */ mdxjsEsmToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js\");\n/**\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n *\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n *\n * @typedef {import('../index.js').MdxjsEsm} MdxjsEsm\n */\n\n// To do: next major: expose functions.\n\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable MDX.js ESM in\n * markdown.\n *\n * When using the micromark syntax extension with `addResult`, nodes will have\n * a `data.estree` field set to an ESTree [`Program`][program] node.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown` to enable MDX.js ESM.\n */\nfunction mdxjsEsmFromMarkdown() {\n  return {\n    enter: {mdxjsEsm: enterMdxjsEsm},\n    exit: {mdxjsEsm: exitMdxjsEsm, mdxjsEsmData: exitMdxjsEsmData}\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown` to enable MDX.js ESM in\n * markdown.\n *\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable MDX.js ESM.\n */\nfunction mdxjsEsmToMarkdown() {\n  return {handlers: {mdxjsEsm: handleMdxjsEsm}}\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterMdxjsEsm(token) {\n  this.enter({type: 'mdxjsEsm', value: ''}, token)\n  this.buffer() // Capture EOLs\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitMdxjsEsm(token) {\n  const value = this.resume()\n  const node = this.stack[this.stack.length - 1]\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'mdxjsEsm')\n\n  this.exit(token)\n\n  const estree = token.estree\n\n  node.value = value\n\n  if (estree) {\n    node.data = {estree}\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitMdxjsEsmData(token) {\n  this.config.enter.data.call(this, token)\n  this.config.exit.data.call(this, token)\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {MdxjsEsm} node\n */\nfunction handleMdxjsEsm(node) {\n  return node.value || ''\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbWRhc3QtdXRpbC1tZHhqcy1lc21AMi4wLjEvbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtbWR4anMtZXNtL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLGFBQWEsbURBQW1EO0FBQ2hFLGFBQWEsOENBQThDO0FBQzNELGFBQWEsMkNBQTJDO0FBQ3hEO0FBQ0EsYUFBYSx5Q0FBeUM7QUFDdEQsYUFBYSwwQ0FBMEM7QUFDdkQ7QUFDQSxhQUFhLGdDQUFnQztBQUM3Qzs7QUFFQTtBQUNtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQSxZQUFZLHdCQUF3QjtBQUNwQyxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxVQUFVLFdBQVc7QUFDckI7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkNBQU07O0FBRVI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYm1fMjAyNC8uL25vZGVfbW9kdWxlcy8ucG5wbS9tZGFzdC11dGlsLW1keGpzLWVzbUAyLjAuMS9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1tZHhqcy1lc20vbGliL2luZGV4LmpzPzU0OTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5Db21waWxlQ29udGV4dH0gQ29tcGlsZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkV4dGVuc2lvbn0gRnJvbU1hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5IYW5kbGV9IEZyb21NYXJrZG93bkhhbmRsZVxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5IYW5kbGV9IFRvTWFya2Rvd25IYW5kbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5PcHRpb25zfSBUb01hcmtkb3duRXh0ZW5zaW9uXG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW5kZXguanMnKS5NZHhqc0VzbX0gTWR4anNFc21cbiAqL1xuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogZXhwb3NlIGZ1bmN0aW9ucy5cbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICdkZXZsb3AnXG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIE1EWC5qcyBFU00gaW5cbiAqIG1hcmtkb3duLlxuICpcbiAqIFdoZW4gdXNpbmcgdGhlIG1pY3JvbWFyayBzeW50YXggZXh0ZW5zaW9uIHdpdGggYGFkZFJlc3VsdGAsIG5vZGVzIHdpbGwgaGF2ZVxuICogYSBgZGF0YS5lc3RyZWVgIGZpZWxkIHNldCB0byBhbiBFU1RyZWUgW2BQcm9ncmFtYF1bcHJvZ3JhbV0gbm9kZS5cbiAqXG4gKiBAcmV0dXJucyB7RnJvbU1hcmtkb3duRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gIHRvIGVuYWJsZSBNRFguanMgRVNNLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWR4anNFc21Gcm9tTWFya2Rvd24oKSB7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IHttZHhqc0VzbTogZW50ZXJNZHhqc0VzbX0sXG4gICAgZXhpdDoge21keGpzRXNtOiBleGl0TWR4anNFc20sIG1keGpzRXNtRGF0YTogZXhpdE1keGpzRXNtRGF0YX1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYCB0byBlbmFibGUgTURYLmpzIEVTTSBpblxuICogbWFya2Rvd24uXG4gKlxuICogQHJldHVybnMge1RvTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBNRFguanMgRVNNLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWR4anNFc21Ub01hcmtkb3duKCkge1xuICByZXR1cm4ge2hhbmRsZXJzOiB7bWR4anNFc206IGhhbmRsZU1keGpzRXNtfX1cbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlck1keGpzRXNtKHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoe3R5cGU6ICdtZHhqc0VzbScsIHZhbHVlOiAnJ30sIHRva2VuKVxuICB0aGlzLmJ1ZmZlcigpIC8vIENhcHR1cmUgRU9Mc1xufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRNZHhqc0VzbSh0b2tlbikge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMucmVzdW1lKClcbiAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICBhc3NlcnQobm9kZS50eXBlID09PSAnbWR4anNFc20nKVxuXG4gIHRoaXMuZXhpdCh0b2tlbilcblxuICBjb25zdCBlc3RyZWUgPSB0b2tlbi5lc3RyZWVcblxuICBub2RlLnZhbHVlID0gdmFsdWVcblxuICBpZiAoZXN0cmVlKSB7XG4gICAgbm9kZS5kYXRhID0ge2VzdHJlZX1cbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRNZHhqc0VzbURhdGEodG9rZW4pIHtcbiAgdGhpcy5jb25maWcuZW50ZXIuZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICB0aGlzLmNvbmZpZy5leGl0LmRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbn1cblxuLyoqXG4gKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAqIEBwYXJhbSB7TWR4anNFc219IG5vZGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlTWR4anNFc20obm9kZSkge1xuICByZXR1cm4gbm9kZS52YWx1ZSB8fCAnJ1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/mdast-util-mdxjs-esm@2.0.1/node_modules/mdast-util-mdxjs-esm/lib/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/mdast-util-mdxjs-esm@2.0.1/node_modules/mdast-util-mdxjs-esm/lib/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/mdast-util-mdxjs-esm@2.0.1/node_modules/mdast-util-mdxjs-esm/lib/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mdxjsEsmFromMarkdown: () => (/* binding */ mdxjsEsmFromMarkdown),\n/* harmony export */   mdxjsEsmToMarkdown: () => (/* binding */ mdxjsEsmToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js\");\n/**\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n *\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n *\n * @typedef {import('../index.js').MdxjsEsm} MdxjsEsm\n */\n\n// To do: next major: expose functions.\n\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable MDX.js ESM in\n * markdown.\n *\n * When using the micromark syntax extension with `addResult`, nodes will have\n * a `data.estree` field set to an ESTree [`Program`][program] node.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown` to enable MDX.js ESM.\n */\nfunction mdxjsEsmFromMarkdown() {\n  return {\n    enter: {mdxjsEsm: enterMdxjsEsm},\n    exit: {mdxjsEsm: exitMdxjsEsm, mdxjsEsmData: exitMdxjsEsmData}\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown` to enable MDX.js ESM in\n * markdown.\n *\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable MDX.js ESM.\n */\nfunction mdxjsEsmToMarkdown() {\n  return {handlers: {mdxjsEsm: handleMdxjsEsm}}\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterMdxjsEsm(token) {\n  this.enter({type: 'mdxjsEsm', value: ''}, token)\n  this.buffer() // Capture EOLs\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitMdxjsEsm(token) {\n  const value = this.resume()\n  const node = this.stack[this.stack.length - 1]\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'mdxjsEsm')\n\n  this.exit(token)\n\n  const estree = token.estree\n\n  node.value = value\n\n  if (estree) {\n    node.data = {estree}\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitMdxjsEsmData(token) {\n  this.config.enter.data.call(this, token)\n  this.config.exit.data.call(this, token)\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {MdxjsEsm} node\n */\nfunction handleMdxjsEsm(node) {\n  return node.value || ''\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbWRhc3QtdXRpbC1tZHhqcy1lc21AMi4wLjEvbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtbWR4anMtZXNtL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLGFBQWEsbURBQW1EO0FBQ2hFLGFBQWEsOENBQThDO0FBQzNELGFBQWEsMkNBQTJDO0FBQ3hEO0FBQ0EsYUFBYSx5Q0FBeUM7QUFDdEQsYUFBYSwwQ0FBMEM7QUFDdkQ7QUFDQSxhQUFhLGdDQUFnQztBQUM3Qzs7QUFFQTtBQUNtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQSxZQUFZLHdCQUF3QjtBQUNwQyxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxVQUFVLFdBQVc7QUFDckI7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkNBQU07O0FBRVI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYm1fMjAyNC8uL25vZGVfbW9kdWxlcy8ucG5wbS9tZGFzdC11dGlsLW1keGpzLWVzbUAyLjAuMS9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1tZHhqcy1lc20vbGliL2luZGV4LmpzP2ExM2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5Db21waWxlQ29udGV4dH0gQ29tcGlsZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkV4dGVuc2lvbn0gRnJvbU1hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5IYW5kbGV9IEZyb21NYXJrZG93bkhhbmRsZVxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5IYW5kbGV9IFRvTWFya2Rvd25IYW5kbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5PcHRpb25zfSBUb01hcmtkb3duRXh0ZW5zaW9uXG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW5kZXguanMnKS5NZHhqc0VzbX0gTWR4anNFc21cbiAqL1xuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogZXhwb3NlIGZ1bmN0aW9ucy5cbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICdkZXZsb3AnXG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIE1EWC5qcyBFU00gaW5cbiAqIG1hcmtkb3duLlxuICpcbiAqIFdoZW4gdXNpbmcgdGhlIG1pY3JvbWFyayBzeW50YXggZXh0ZW5zaW9uIHdpdGggYGFkZFJlc3VsdGAsIG5vZGVzIHdpbGwgaGF2ZVxuICogYSBgZGF0YS5lc3RyZWVgIGZpZWxkIHNldCB0byBhbiBFU1RyZWUgW2BQcm9ncmFtYF1bcHJvZ3JhbV0gbm9kZS5cbiAqXG4gKiBAcmV0dXJucyB7RnJvbU1hcmtkb3duRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gIHRvIGVuYWJsZSBNRFguanMgRVNNLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWR4anNFc21Gcm9tTWFya2Rvd24oKSB7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IHttZHhqc0VzbTogZW50ZXJNZHhqc0VzbX0sXG4gICAgZXhpdDoge21keGpzRXNtOiBleGl0TWR4anNFc20sIG1keGpzRXNtRGF0YTogZXhpdE1keGpzRXNtRGF0YX1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYCB0byBlbmFibGUgTURYLmpzIEVTTSBpblxuICogbWFya2Rvd24uXG4gKlxuICogQHJldHVybnMge1RvTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBNRFguanMgRVNNLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWR4anNFc21Ub01hcmtkb3duKCkge1xuICByZXR1cm4ge2hhbmRsZXJzOiB7bWR4anNFc206IGhhbmRsZU1keGpzRXNtfX1cbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlck1keGpzRXNtKHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoe3R5cGU6ICdtZHhqc0VzbScsIHZhbHVlOiAnJ30sIHRva2VuKVxuICB0aGlzLmJ1ZmZlcigpIC8vIENhcHR1cmUgRU9Mc1xufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRNZHhqc0VzbSh0b2tlbikge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMucmVzdW1lKClcbiAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICBhc3NlcnQobm9kZS50eXBlID09PSAnbWR4anNFc20nKVxuXG4gIHRoaXMuZXhpdCh0b2tlbilcblxuICBjb25zdCBlc3RyZWUgPSB0b2tlbi5lc3RyZWVcblxuICBub2RlLnZhbHVlID0gdmFsdWVcblxuICBpZiAoZXN0cmVlKSB7XG4gICAgbm9kZS5kYXRhID0ge2VzdHJlZX1cbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRNZHhqc0VzbURhdGEodG9rZW4pIHtcbiAgdGhpcy5jb25maWcuZW50ZXIuZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICB0aGlzLmNvbmZpZy5leGl0LmRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbn1cblxuLyoqXG4gKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAqIEBwYXJhbSB7TWR4anNFc219IG5vZGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlTWR4anNFc20obm9kZSkge1xuICByZXR1cm4gbm9kZS52YWx1ZSB8fCAnJ1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/mdast-util-mdxjs-esm@2.0.1/node_modules/mdast-util-mdxjs-esm/lib/index.js\n");

/***/ })

};
;