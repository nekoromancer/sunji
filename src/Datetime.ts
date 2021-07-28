import { ValidTime, InvalidTime } from './Internal';

export class Datetime {
    public static of (val: any): ValidTime | InvalidTime<typeof val> {
        if ((val instanceof Date && !isNaN(val.getTime())) || !isNaN(new Date(val).getTime())) {
            return new ValidTime(val);
        } else {
            return new InvalidTime(val);
        }
    }
}

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
