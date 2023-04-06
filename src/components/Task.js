"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
function Task(props) {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex justify-content-between my-3" }, { children: [(0, jsx_runtime_1.jsx)("p", __assign({ className: "m-0" }, { children: props.text })), (0, jsx_runtime_1.jsx)("input", { type: "radio" })] })));
}
exports["default"] = Task;
