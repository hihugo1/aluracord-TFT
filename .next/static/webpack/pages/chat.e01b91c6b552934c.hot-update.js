"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.jsx":
/*!************************!*\
  !*** ./pages/chat.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleNovaMensagem = // ./Sua lógica vai aqui\n    function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            id: listaDeMensagens.length + 1,\n            de: \"hihugo1\",\n            texto: novaMensagem\n        };\n        setListaDeMensagens([\n            mensagem\n        ].concat(_toConsumableArray(listaDeMensagens)));\n        setMensagem(\"\");\n    };\n    _s();\n    // Sua lógica vai aqui\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\"), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundImage: \"url(https://images.alphacoders.com/120/1204920.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                    value: mensagem1,\n                                    onChange: function(event) {\n                                        var value = event.target.value;\n                                        setMensagem(value);\n                                    },\n                                    onKeyPress: function(event) {\n                                        if (event.key === \"Enter\") {\n                                            event.preventDefault();\n                                            handleNovaMensagem(mensagem1);\n                                        }\n                                    },\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    type: \"textarea\",\n                                    styleSheet: {\n                                        width: \"100%\",\n                                        border: \"0\",\n                                        resize: \"none\",\n                                        borderRadius: \"5px\",\n                                        padding: \"6px 8px\",\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                        marginRight: \"12px\",\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    styleSheet: {\n                                        height: '2rem'\n                                    },\n                                    children: \"Enviar\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"AuwZhRn/YX0XQzEeDQ8k4qMnSgw=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/hihugo1.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                                lineNumber: 174,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                                lineNumber: 184,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                                lineNumber: 185,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                        lineNumber: 169,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                lineNumber: 157,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n        lineNumber: 143,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RGEsR0FBRyxFQUFHLENBQThCOzs7Ozs7d0dBRXJDckUsc0RBQUk7Z0NBQUNpRSxHQUFHLEVBQUMsQ0FBUTswQ0FBRXhELFFBQVEsQ0FBQ0ksRUFBRTs7Ozs7O3dHQUM5QmIsc0RBQUk7Z0NBQ0hrQixVQUFVLEVBQUUsQ0FBQztvQ0FDWG9ELFFBQVEsRUFBRSxDQUFNO29DQUNoQkMsVUFBVSxFQUFFLENBQUs7b0NBQ2pCN0MsS0FBSyxFQUFFckIsb0VBQW9DO2dDQUM3QyxDQUFDO2dDQUNENEQsR0FBRyxFQUFDLENBQU07MENBRVQsR0FBRyxDQUFDTyxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O29CQUdqQ2hFLFFBQVEsQ0FBQ0ssS0FBSzs7ZUF0Q1ZMLFFBQVEsQ0FBQ0MsRUFBRTs7Ozs7UUF5Q3RCLENBQUM7Ozs7OztBQUdQLENBQUM7TUE5RFErQixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanN4PzI3ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xuICAvLyBTdWEgbMOzZ2ljYSB2YWkgYXF1aVxuICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGlzdGFEZU1lbnNhZ2Vucywgc2V0TGlzdGFEZU1lbnNhZ2Vuc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIC8vIC4vU3VhIGzDs2dpY2EgdmFpIGFxdWlcblxuICBmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0obm92YU1lbnNhZ2VtKSB7XG4gICAgY29uc3QgbWVuc2FnZW0gPSB7XG4gICAgICBpZDogbGlzdGFEZU1lbnNhZ2Vucy5sZW5ndGggKyAxLFxuICAgICAgZGU6IFwiaGlodWdvMVwiLFxuICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcbiAgICB9O1xuICAgIHNldExpc3RhRGVNZW5zYWdlbnMoW21lbnNhZ2VtLCAuLi5saXN0YURlTWVuc2FnZW5zXSk7XG4gICAgc2V0TWVuc2FnZW0oXCJcIik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9pbWFnZXMuYWxwaGFjb2RlcnMuY29tLzEyMC8xMjA0OTIwLmpwZylgLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgYm94U2hhZG93OiBcIjAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgbWF4V2lkdGg6IFwiOTUlXCIsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBcIjk1dmhcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjMycHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgIGhlaWdodDogXCI4MCVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2xpc3RhRGVNZW5zYWdlbnN9IC8+XG4gICAgICAgICAgey8qe2xpc3RhRGVNZW5zYWdlbnMubWFwKChtZW5zYWdlbUF0dWFsKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXttZW5zYWdlbUF0dWFsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVuc2FnZW1BdHVhbC5kZX06e21lbnNhZ2VtQXR1YWwudGV4dG99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX0qL31cblxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXttZW5zYWdlbX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHNldE1lbnNhZ2VtKHZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMFwiLFxuICAgICAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4IDhweFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcycmVtJ1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5FbnZpYXI8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE2cHhcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFRleHQgdmFyaWFudD1cImhlYWRpbmc1XCI+Q2hhdDwvVGV4dD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgY29sb3JWYXJpYW50PVwibmV1dHJhbFwiXG4gICAgICAgICAgbGFiZWw9XCJMb2dvdXRcIlxuICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiBNZXNzYWdlTGlzdChwcm9wcykge1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgdGFnPVwidWxcIlxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uLXJldmVyc2VcIixcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXG4gICAgICAgIH1cbiAgICB9XG4gICAgPlxuICAgICAge3Byb3BzLm1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGtleT17bWVuc2FnZW0uaWR9XG4gICAgICAgICAgICB0YWc9XCJsaVwiXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjhweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tL2hpaHVnbzEucG5nYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+e21lbnNhZ2VtLmRlfTwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjhweFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAge21lbnNhZ2VtLnRleHRvfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwiYXBwQ29uZmlnIiwiQ2hhdFBhZ2UiLCJoYW5kbGVOb3ZhTWVuc2FnZW0iLCJub3ZhTWVuc2FnZW0iLCJtZW5zYWdlbSIsImlkIiwibGlzdGFEZU1lbnNhZ2VucyIsImxlbmd0aCIsImRlIiwidGV4dG8iLCJzZXRMaXN0YURlTWVuc2FnZW5zIiwic2V0TWVuc2FnZW0iLCJ1c2VTdGF0ZSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJNZXNzYWdlTGlzdCIsIm1lbnNhZ2VucyIsImFzIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwid2lkdGgiLCJib3JkZXIiLCJyZXNpemUiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvclZhcmlhbnQiLCJsYWJlbCIsImhyZWYiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ0YWciLCJvdmVyZmxvdyIsIm1hcCIsImhvdmVyIiwic3JjIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.jsx\n");

/***/ })

});