"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidTime = void 0;
const Internal_1 = require("./Internal");
class ValidTime extends Internal_1.Datetime {
    constructor(val) {
        super();
        if (val instanceof Date) {
            this.val = val.valueOf();
        }
        else if (typeof val === 'string') {
            this.val = new Date(val).valueOf();
        }
        else {
            this.val = val;
        }
    }
    get isValid() {
        return true;
    }
    static of(val) {
        return new ValidTime(val);
    }
    map(fn) {
        const timestamp = fn(this.val);
        const dateTime = new Date(timestamp);
        if (isNaN(dateTime.getTime())) {
            return new Internal_1.InvalidTime(timestamp);
        }
        else {
            return new ValidTime(timestamp);
        }
    }
    flatMap(fn) {
        return fn(this.val);
    }
    dateMap(fn) {
        return new ValidTime(fn(new Date(this.val)));
    }
    getDate() {
        return new Date(this.val);
    }
    getDurations(date) {
        return date.flatMap(t => t - this.val);
    }
    orSome() {
        return this.val;
    }
}
exports.ValidTime = ValidTime;
//# sourceMappingURL=ValidTime.js.map