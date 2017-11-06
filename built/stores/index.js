"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dob_1 = require("dob");
const action_1 = require("./hacker-news/action");
const store_1 = require("./hacker-news/store");
exports.default = dob_1.combineStores({
    HackerNewsAction: action_1.default,
    HackerNewsStore: store_1.default,
});
//# sourceMappingURL=index.js.map