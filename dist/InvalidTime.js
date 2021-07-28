"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTime = void 0;
const Internal_1 = require("./Internal");
class InvalidTime extends Internal_1.Datetime {
    constructor(val) {
        super();
        this.val = val;
    }
    static of(val) {
        return new InvalidTime(val);
    }
    get isValid() {
        return false;
    }
    map() {
        return this;
    }
    flatMap() {
        return this.val;
    }
    dateMap() {
        return this;
    }
    getDate() {
        return this.val;
    }
    getDurations() {
        return 0;
    }
    orSome(someVal) {
        return someVal ? someVal : this.val;
    }
}
exports.InvalidTime = InvalidTime;
//# sourceMappingURL=InvalidTime.js.map