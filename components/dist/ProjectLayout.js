"use strict";
exports.__esModule = true;
// src/app/components/ProjectLayout.tsx
var react_1 = require("react");
var google_1 = require("next/font/google");
var Card_1 = require("./Card");
var quicksand = google_1.Quicksand({ weight: ["700"], subsets: ["latin"] });
var ProjectLayout = function (_a) {
    var name = _a.name, color = _a.color, description = _a.description, role = _a.role;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("header", { className: "bg-projectBlue text-onProject h-64" },
            react_1["default"].createElement("div", { className: "px-3 md:px-6 lg:px-12 flex items-center h-full" },
                react_1["default"].createElement("h1", { className: quicksand.className + " text-7xl font-bold" }, name))),
        react_1["default"].createElement("div", { className: "px-3 md:px-6 lg:pxs-12 my-4" },
            react_1["default"].createElement("div", { className: "mt-[-45px] mb-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2" },
                react_1["default"].createElement("div", { className: "col-span-2" },
                    react_1["default"].createElement(Card_1["default"], { richContent: [react_1["default"].createElement("span", { key: "summary" }, description)] })),
                react_1["default"].createElement("div", { className: "col-span-1 md:col-span-2 lg:col-span-1 h-f" },
                    react_1["default"].createElement(Card_1["default"], { richContent: [
                            react_1["default"].createElement("div", { key: 'ContandAndLocation', className: 'flex flex-col h-full justify-between gap-y-6' },
                                react_1["default"].createElement("div", { key: 'roles', className: 'flex flex-col' }, role.map(function (role, index) { return (react_1["default"].createElement("span", { key: index, className: 'inline-flex gap-2' }, role)); })))
                        ] }))))));
};
exports["default"] = ProjectLayout;
