"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidTime = void 0;
const Internal_1 = require("./Internal");
class ValidTime extends Internal_1.Datetime {
    constructor(val) {
        super();
        this.val = val;
    }
    get isValid() {
        return true;
    }
    get dateObj() {
        return new Date(this.val);
    }
    map(fn) {
        return Internal_1.Datetime.of(fn(this.val));
    }
    chain(fn) {
        return fn(this.val);
    }
    getDurations(date) {
        return date instanceof ValidTime
            ? Internal_1.Duration.of(date.chain(v => v - this.val))
            : Internal_1.Duration.of(null);
    }
    parse(parser) {
        return parser(new Date(this.val));
    }
    orSome() {
        return this.val;
    }
}
exports.ValidTime = ValidTime;
//# sourceMappingURL=ValidTime.js.map