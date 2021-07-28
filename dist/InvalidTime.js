"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datetime_1 = __importDefault(require("./Datetime"));
class InvalidTime extends Datetime_1.default {
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
    dateFlatMap() {
        return this.val;
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
exports.default = InvalidTime;
//# sourceMappingURL=InvalidTime.js.map