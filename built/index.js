"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dob_react_1 = require("dob-react");
const React = require("react");
const ReactDOM = require("react-dom");
const layout_component_1 = require("./layout/layout.component");
const index_1 = require("./stores/index");
ReactDOM.render(React.createElement(dob_react_1.Provider, Object.assign({}, index_1.default),
    React.createElement(layout_component_1.default, null)), document.getElementById("react-dom"));
//# sourceMappingURL=index.js.map