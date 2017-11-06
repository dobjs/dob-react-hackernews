"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const layout_type_1 = require("./layout.type");
const S = require("./layout.style");
const lists_component_1 = require("../pages/lists/lists.component");
class Layout extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = new layout_type_1.State();
    }
    render() {
        return (React.createElement(react_router_dom_2.BrowserRouter, null,
            React.createElement(S.Container, null,
                React.createElement(S.Nav, null,
                    React.createElement(S.NavLeft, null,
                        React.createElement(react_router_dom_1.Link, { to: "/" },
                            React.createElement(S.Logo, { src: "https://avatars1.githubusercontent.com/u/32093464?s=200&v=4" })),
                        React.createElement(react_router_dom_1.Link, { to: "/" }, "top"),
                        React.createElement(react_router_dom_1.Link, { to: "/new" }, "new"),
                        React.createElement(react_router_dom_1.Link, { to: "/show" }, "show"),
                        React.createElement(react_router_dom_1.Link, { to: "/ask" }, "ask"),
                        React.createElement(react_router_dom_1.Link, { to: "/jobs" }, "jobs")),
                    React.createElement(S.NavRight, null,
                        React.createElement(react_router_dom_1.Link, { to: "/about" }, "about"))),
                React.createElement(react_router_dom_2.Switch, null,
                    React.createElement(react_router_dom_2.Route, { exact: true, path: "/", component: lists_component_1.default })))));
    }
}
Layout.defaultProps = new layout_type_1.Props();
exports.default = Layout;
//# sourceMappingURL=layout.component.js.map