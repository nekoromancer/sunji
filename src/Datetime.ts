import ValidTime from "./ValidTime";
import InvalidTime from "./InvalidTime";

export default class Datetime {
    public static of (val: any): ValidTime | InvalidTime<typeof val> {
        if ((val instanceof Date && !isNaN(val.getTime())) || !isNaN(new Date(val).getTime())) {
            return new ValidTime(val);
        } else {
            return new InvalidTime(val);
        }
    }
}

// const toSeconds = (ms: number): number => ms * 1000;
// const asSeconds = (ms: number): number => ms / toSeconds(1);
// const toMinutes = (ms: number): number => toSeconds(ms) * 60;
// const asMinutes = (ms: number): number => ms / toMinutes(1);
// const toHours = (ms: number): number => toMinutes(ms) * 60;
// const asHours = (ms: number): number => ms / toHours(1);
// const toDates = (ms: number): number => toHours(ms) * 24;
// const asDates = (ms: number): number => ms / toDates(1);
// const addSeconds = (secs: number): ((val: number) => number) => (val: number): number => secs + val;
// const addMinutes = (mins: number): ((val: number) => number) => (val: number): number => toMinutes(mins) + val;
// const addHours = (hours: number): ((val: number) => number) => (val: number): number => toHours(hours) + val;
// const addDays = (days: number): ((val: number) => number) => (val: number): number => toDates(days) + val;
// const addMonths = (months: number): ((val: number) => number) => (val: number): number => {
//     const dateTime = new Date(val);
//     const monthsAdded = dateTime.getMonth() + months;
//     const newMonth = monthsAdded % 11;
//     const newYear = dateTime.getFullYear() + Math.floor(monthsAdded / 11);
//     return new Date(
//         newYear,
//         newMonth,
//         dateTime.getDate(),
//         dateTime.getHours(),
//         dateTime.getMinutes(),
//         dateTime.getSeconds(),
//         dateTime.getMilliseconds()
//     ).valueOf();
// }
// const addYears = (years: number): ((val: number) => number) => (val: number): number => {
//     const dateTime = new Date(val);
//     return new Date(
//         dateTime.getFullYear() + years,
//         dateTime.getMonth(),
//         dateTime.getDate(),
//         dateTime.getHours(),
//         dateTime.getMinutes(),
//         dateTime.getSeconds(),
//         dateTime.getMilliseconds()
//     ).valueOf();
// }
//
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
// const parser = (date: Date): IDateTimeObject => {
//     return {
//         year: date.getFullYear(),
//         month: date.getMonth(),
//         day: date.getDay(),
//         date: date.getDate(),
//         hour: date.getHours(),
//         minute: date.getMinutes(),
//         second: date.getSeconds(),
//         ms: date.getMilliseconds(),
//     };
// }
//
// const dateTime1 = Datetime.of('2021-01-01');
// const dateTime2 = Datetime.of('2021-01-02');
// const log = console.log;
//
// log(
//     asDates(dateTime1.getDurations(dateTime2)),
// )
