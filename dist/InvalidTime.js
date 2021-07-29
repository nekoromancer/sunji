"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTime = void 0;
const Internal_1 = require("./Internal");
class InvalidTime extends Internal_1.Datetime {
    constructor(val) {
        super();
        this.val = val;
    }
    get isValid() {
        return false;
    }
    get dateObj() {
        return this.val;
    }
    map() {
        return this;
    }
    chain() {
        return this;
    }
    getDurations() {
        return Internal_1.Duration.of(null);
    }
    orSome(someVal) {
        return someVal ? someVal : this.val;
    }
}
exports.InvalidTime = InvalidTime;
//# sourceMappingURL=InvalidTime.js.map