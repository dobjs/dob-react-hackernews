"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dob_react_1 = require("dob-react");
const React = require("react");
const react_helper_1 = require("../../utils/react-helper");
const lists_type_1 = require("./lists.type");
const S = require("./lists.style");
let Lists = class Lists extends react_helper_1.PureComponent {
    constructor() {
        super(...arguments);
        this.state = new lists_type_1.State();
        this.handlePlus = () => {
            this.props.CountAction.updateCount(this.props.CountStore.count + 1);
        };
        this.handleSubtract = () => {
            this.props.CountAction.updateCount(this.props.CountStore.count - 1);
        };
    }
    render() {
        return (React.createElement(S.Container, null,
            "count: ",
            this.props.CountStore.count,
            React.createElement("button", { onClick: this.handlePlus }, "+"),
            React.createElement("button", { onClick: this.handleSubtract }, "-")));
    }
};
Lists.defaultProps = new lists_type_1.Props();
Lists = __decorate([
    dob_react_1.Connect
], Lists);
exports.default = Lists;
//# sourceMappingURL=lists.component.js.map