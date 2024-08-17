"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-position-from-estree@2.0.0";
exports.ids = ["vendor-chunks/unist-util-position-from-estree@2.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/unist-util-position-from-estree@2.0.0/node_modules/unist-util-position-from-estree/lib/index.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/unist-util-position-from-estree@2.0.0/node_modules/unist-util-position-from-estree/lib/index.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   positionFromEstree: () => (/* binding */ positionFromEstree)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Point} UnistPoint\n * @typedef {import('unist').Position} UnistPosition\n */\n\n/**\n * @typedef {[start: number | null | undefined, end: number | null | undefined]} RangeLike\n *\n * @typedef PointLike\n * @property {number | null | undefined} [line]\n * @property {number | null | undefined} [column]\n *\n * @typedef LocLike\n * @property {PointLike | null | undefined} [start]\n * @property {PointLike | null | undefined} [end]\n *\n * @typedef NodeLike\n * @property {LocLike | null | undefined} [loc]\n * @property {RangeLike | null | undefined} [range]\n * @property {number | null | undefined} [start]\n * @property {number | null | undefined} [end]\n */\n\n/**\n * Turn an estree `node` into a unist `position`.\n *\n * @param {NodeLike | null | undefined} [node]\n *   estree node.\n * @returns {UnistPosition | undefined}\n *   unist position.\n */\nfunction positionFromEstree(node) {\n  const nodeLike = node || {}\n  const loc = nodeLike.loc || {}\n  const range = nodeLike.range || [undefined, undefined]\n  const start = pointOrUndefined(loc.start, range[0] || nodeLike.start)\n  const end = pointOrUndefined(loc.end, range[1] || nodeLike.end)\n\n  if (start && end) {\n    return {start, end}\n  }\n}\n\n/**\n * @param {unknown} estreePoint\n *   estree point.\n * @param {unknown} estreeOffset\n *  estree offset.\n * @returns {UnistPoint | undefined}\n *   unist point.\n */\nfunction pointOrUndefined(estreePoint, estreeOffset) {\n  if (estreePoint && typeof estreePoint === 'object') {\n    const line =\n      'line' in estreePoint ? numberOrUndefined(estreePoint.line) : undefined\n    const column =\n      'column' in estreePoint\n        ? numberOrUndefined(estreePoint.column)\n        : undefined\n\n    if (line && column !== undefined) {\n      return {\n        line,\n        column: column + 1,\n        offset: numberOrUndefined(estreeOffset)\n      }\n    }\n  }\n}\n\n/**\n * @param {unknown} value\n * @returns {number | undefined}\n */\nfunction numberOrUndefined(value) {\n  return typeof value === 'number' && value > -1 ? value : undefined\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pc3QtdXRpbC1wb3NpdGlvbi1mcm9tLWVzdHJlZUAyLjAuMC9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi1mcm9tLWVzdHJlZS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSwwQkFBMEI7QUFDdkM7O0FBRUE7QUFDQSxhQUFhLG9FQUFvRTtBQUNqRjtBQUNBO0FBQ0EsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekM7QUFDQTtBQUNBLGNBQWMsOEJBQThCO0FBQzVDLGNBQWMsOEJBQThCO0FBQzVDO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQyxjQUFjLDhCQUE4QjtBQUM1QyxjQUFjLDJCQUEyQjtBQUN6QyxjQUFjLDJCQUEyQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZCQUE2QjtBQUN4QztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NibV8yMDI0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3VuaXN0LXV0aWwtcG9zaXRpb24tZnJvbS1lc3RyZWVAMi4wLjAvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtcG9zaXRpb24tZnJvbS1lc3RyZWUvbGliL2luZGV4LmpzP2U0M2EiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvaW50fSBVbmlzdFBvaW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvc2l0aW9ufSBVbmlzdFBvc2l0aW9uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7W3N0YXJ0OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBlbmQ6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWRdfSBSYW5nZUxpa2VcbiAqXG4gKiBAdHlwZWRlZiBQb2ludExpa2VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2xpbmVdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtjb2x1bW5dXG4gKlxuICogQHR5cGVkZWYgTG9jTGlrZVxuICogQHByb3BlcnR5IHtQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbc3RhcnRdXG4gKiBAcHJvcGVydHkge1BvaW50TGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtlbmRdXG4gKlxuICogQHR5cGVkZWYgTm9kZUxpa2VcbiAqIEBwcm9wZXJ0eSB7TG9jTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtsb2NdXG4gKiBAcHJvcGVydHkge1JhbmdlTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtyYW5nZV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3N0YXJ0XVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbZW5kXVxuICovXG5cbi8qKlxuICogVHVybiBhbiBlc3RyZWUgYG5vZGVgIGludG8gYSB1bmlzdCBgcG9zaXRpb25gLlxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbbm9kZV1cbiAqICAgZXN0cmVlIG5vZGUuXG4gKiBAcmV0dXJucyB7VW5pc3RQb3NpdGlvbiB8IHVuZGVmaW5lZH1cbiAqICAgdW5pc3QgcG9zaXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbkZyb21Fc3RyZWUobm9kZSkge1xuICBjb25zdCBub2RlTGlrZSA9IG5vZGUgfHwge31cbiAgY29uc3QgbG9jID0gbm9kZUxpa2UubG9jIHx8IHt9XG4gIGNvbnN0IHJhbmdlID0gbm9kZUxpa2UucmFuZ2UgfHwgW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICBjb25zdCBzdGFydCA9IHBvaW50T3JVbmRlZmluZWQobG9jLnN0YXJ0LCByYW5nZVswXSB8fCBub2RlTGlrZS5zdGFydClcbiAgY29uc3QgZW5kID0gcG9pbnRPclVuZGVmaW5lZChsb2MuZW5kLCByYW5nZVsxXSB8fCBub2RlTGlrZS5lbmQpXG5cbiAgaWYgKHN0YXJ0ICYmIGVuZCkge1xuICAgIHJldHVybiB7c3RhcnQsIGVuZH1cbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bn0gZXN0cmVlUG9pbnRcbiAqICAgZXN0cmVlIHBvaW50LlxuICogQHBhcmFtIHt1bmtub3dufSBlc3RyZWVPZmZzZXRcbiAqICBlc3RyZWUgb2Zmc2V0LlxuICogQHJldHVybnMge1VuaXN0UG9pbnQgfCB1bmRlZmluZWR9XG4gKiAgIHVuaXN0IHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludE9yVW5kZWZpbmVkKGVzdHJlZVBvaW50LCBlc3RyZWVPZmZzZXQpIHtcbiAgaWYgKGVzdHJlZVBvaW50ICYmIHR5cGVvZiBlc3RyZWVQb2ludCA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBsaW5lID1cbiAgICAgICdsaW5lJyBpbiBlc3RyZWVQb2ludCA/IG51bWJlck9yVW5kZWZpbmVkKGVzdHJlZVBvaW50LmxpbmUpIDogdW5kZWZpbmVkXG4gICAgY29uc3QgY29sdW1uID1cbiAgICAgICdjb2x1bW4nIGluIGVzdHJlZVBvaW50XG4gICAgICAgID8gbnVtYmVyT3JVbmRlZmluZWQoZXN0cmVlUG9pbnQuY29sdW1uKVxuICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgaWYgKGxpbmUgJiYgY29sdW1uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmUsXG4gICAgICAgIGNvbHVtbjogY29sdW1uICsgMSxcbiAgICAgICAgb2Zmc2V0OiBudW1iZXJPclVuZGVmaW5lZChlc3RyZWVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gbnVtYmVyT3JVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSA/IHZhbHVlIDogdW5kZWZpbmVkXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/unist-util-position-from-estree@2.0.0/node_modules/unist-util-position-from-estree/lib/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/unist-util-position-from-estree@2.0.0/node_modules/unist-util-position-from-estree/lib/index.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/unist-util-position-from-estree@2.0.0/node_modules/unist-util-position-from-estree/lib/index.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   positionFromEstree: () => (/* binding */ positionFromEstree)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Point} UnistPoint\n * @typedef {import('unist').Position} UnistPosition\n */\n\n/**\n * @typedef {[start: number | null | undefined, end: number | null | undefined]} RangeLike\n *\n * @typedef PointLike\n * @property {number | null | undefined} [line]\n * @property {number | null | undefined} [column]\n *\n * @typedef LocLike\n * @property {PointLike | null | undefined} [start]\n * @property {PointLike | null | undefined} [end]\n *\n * @typedef NodeLike\n * @property {LocLike | null | undefined} [loc]\n * @property {RangeLike | null | undefined} [range]\n * @property {number | null | undefined} [start]\n * @property {number | null | undefined} [end]\n */\n\n/**\n * Turn an estree `node` into a unist `position`.\n *\n * @param {NodeLike | null | undefined} [node]\n *   estree node.\n * @returns {UnistPosition | undefined}\n *   unist position.\n */\nfunction positionFromEstree(node) {\n  const nodeLike = node || {}\n  const loc = nodeLike.loc || {}\n  const range = nodeLike.range || [undefined, undefined]\n  const start = pointOrUndefined(loc.start, range[0] || nodeLike.start)\n  const end = pointOrUndefined(loc.end, range[1] || nodeLike.end)\n\n  if (start && end) {\n    return {start, end}\n  }\n}\n\n/**\n * @param {unknown} estreePoint\n *   estree point.\n * @param {unknown} estreeOffset\n *  estree offset.\n * @returns {UnistPoint | undefined}\n *   unist point.\n */\nfunction pointOrUndefined(estreePoint, estreeOffset) {\n  if (estreePoint && typeof estreePoint === 'object') {\n    const line =\n      'line' in estreePoint ? numberOrUndefined(estreePoint.line) : undefined\n    const column =\n      'column' in estreePoint\n        ? numberOrUndefined(estreePoint.column)\n        : undefined\n\n    if (line && column !== undefined) {\n      return {\n        line,\n        column: column + 1,\n        offset: numberOrUndefined(estreeOffset)\n      }\n    }\n  }\n}\n\n/**\n * @param {unknown} value\n * @returns {number | undefined}\n */\nfunction numberOrUndefined(value) {\n  return typeof value === 'number' && value > -1 ? value : undefined\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pc3QtdXRpbC1wb3NpdGlvbi1mcm9tLWVzdHJlZUAyLjAuMC9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi1mcm9tLWVzdHJlZS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSwwQkFBMEI7QUFDdkM7O0FBRUE7QUFDQSxhQUFhLG9FQUFvRTtBQUNqRjtBQUNBO0FBQ0EsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekM7QUFDQTtBQUNBLGNBQWMsOEJBQThCO0FBQzVDLGNBQWMsOEJBQThCO0FBQzVDO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQyxjQUFjLDhCQUE4QjtBQUM1QyxjQUFjLDJCQUEyQjtBQUN6QyxjQUFjLDJCQUEyQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZCQUE2QjtBQUN4QztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NibV8yMDI0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3VuaXN0LXV0aWwtcG9zaXRpb24tZnJvbS1lc3RyZWVAMi4wLjAvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtcG9zaXRpb24tZnJvbS1lc3RyZWUvbGliL2luZGV4LmpzPzdlYTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvaW50fSBVbmlzdFBvaW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvc2l0aW9ufSBVbmlzdFBvc2l0aW9uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7W3N0YXJ0OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBlbmQ6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWRdfSBSYW5nZUxpa2VcbiAqXG4gKiBAdHlwZWRlZiBQb2ludExpa2VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2xpbmVdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtjb2x1bW5dXG4gKlxuICogQHR5cGVkZWYgTG9jTGlrZVxuICogQHByb3BlcnR5IHtQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbc3RhcnRdXG4gKiBAcHJvcGVydHkge1BvaW50TGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtlbmRdXG4gKlxuICogQHR5cGVkZWYgTm9kZUxpa2VcbiAqIEBwcm9wZXJ0eSB7TG9jTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtsb2NdXG4gKiBAcHJvcGVydHkge1JhbmdlTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtyYW5nZV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3N0YXJ0XVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbZW5kXVxuICovXG5cbi8qKlxuICogVHVybiBhbiBlc3RyZWUgYG5vZGVgIGludG8gYSB1bmlzdCBgcG9zaXRpb25gLlxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbbm9kZV1cbiAqICAgZXN0cmVlIG5vZGUuXG4gKiBAcmV0dXJucyB7VW5pc3RQb3NpdGlvbiB8IHVuZGVmaW5lZH1cbiAqICAgdW5pc3QgcG9zaXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbkZyb21Fc3RyZWUobm9kZSkge1xuICBjb25zdCBub2RlTGlrZSA9IG5vZGUgfHwge31cbiAgY29uc3QgbG9jID0gbm9kZUxpa2UubG9jIHx8IHt9XG4gIGNvbnN0IHJhbmdlID0gbm9kZUxpa2UucmFuZ2UgfHwgW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICBjb25zdCBzdGFydCA9IHBvaW50T3JVbmRlZmluZWQobG9jLnN0YXJ0LCByYW5nZVswXSB8fCBub2RlTGlrZS5zdGFydClcbiAgY29uc3QgZW5kID0gcG9pbnRPclVuZGVmaW5lZChsb2MuZW5kLCByYW5nZVsxXSB8fCBub2RlTGlrZS5lbmQpXG5cbiAgaWYgKHN0YXJ0ICYmIGVuZCkge1xuICAgIHJldHVybiB7c3RhcnQsIGVuZH1cbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bn0gZXN0cmVlUG9pbnRcbiAqICAgZXN0cmVlIHBvaW50LlxuICogQHBhcmFtIHt1bmtub3dufSBlc3RyZWVPZmZzZXRcbiAqICBlc3RyZWUgb2Zmc2V0LlxuICogQHJldHVybnMge1VuaXN0UG9pbnQgfCB1bmRlZmluZWR9XG4gKiAgIHVuaXN0IHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludE9yVW5kZWZpbmVkKGVzdHJlZVBvaW50LCBlc3RyZWVPZmZzZXQpIHtcbiAgaWYgKGVzdHJlZVBvaW50ICYmIHR5cGVvZiBlc3RyZWVQb2ludCA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBsaW5lID1cbiAgICAgICdsaW5lJyBpbiBlc3RyZWVQb2ludCA/IG51bWJlck9yVW5kZWZpbmVkKGVzdHJlZVBvaW50LmxpbmUpIDogdW5kZWZpbmVkXG4gICAgY29uc3QgY29sdW1uID1cbiAgICAgICdjb2x1bW4nIGluIGVzdHJlZVBvaW50XG4gICAgICAgID8gbnVtYmVyT3JVbmRlZmluZWQoZXN0cmVlUG9pbnQuY29sdW1uKVxuICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgaWYgKGxpbmUgJiYgY29sdW1uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmUsXG4gICAgICAgIGNvbHVtbjogY29sdW1uICsgMSxcbiAgICAgICAgb2Zmc2V0OiBudW1iZXJPclVuZGVmaW5lZChlc3RyZWVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gbnVtYmVyT3JVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSA/IHZhbHVlIDogdW5kZWZpbmVkXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/unist-util-position-from-estree@2.0.0/node_modules/unist-util-position-from-estree/lib/index.js\n");

/***/ })

};
;