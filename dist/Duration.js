"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = void 0;
class Duration {
    constructor(val) {
        this.val = val;
    }
    get isValid() {
        return !!this.val;
    }
    map(fn) {
        return this.isValid ? new Duration(fn(this.val)) : this;
    }
    chain(fn) {
        return this.isValid ? fn(this.val) : this;
    }
    orSome(val) {
        return this.isValid ? this.val : val;
    }
}
exports.Duration = Duration;
//# sourceMappingURL=Duration.js.map