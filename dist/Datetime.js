"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datetime = void 0;
const Internal_1 = require("./Internal");
class Datetime {
    static of(val) {
        if (val instanceof Date && !isNaN(val.getTime())) {
            return new Internal_1.ValidTime(val.valueOf());
        }
        else if (val !== null && typeof val !== 'undefined' && !isNaN(new Date(val).getTime())) {
            return new Internal_1.ValidTime(new Date(val).getTime());
        }
        else {
            return new Internal_1.InvalidTime(val);
        }
    }
}
exports.Datetime = Datetime;
// const SEXAGENARY_CIRCLE = {
//     hs: ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'],
//     eb: ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'],
// };
//
// const getSexagenary = (year: number): string => {
//     const mod = year - 4;
//     return `${SEXAGENARY_CIRCLE.hs[mod % 10]}${SEXAGENARY_CIRCLE.eb[mod % 12]}`;
// }
//
//# sourceMappingURL=Datetime.js.map