"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datetime_1 = __importDefault(require("./Datetime"));
const InvalidTime_1 = __importDefault(require("./InvalidTime"));
class ValidTime extends Datetime_1.default {
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
            return new InvalidTime_1.default(timestamp);
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
    dateFlatMap(fn) {
        return fn(new Date(this.val));
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
exports.default = ValidTime;
//# sourceMappingURL=ValidTime.js.map