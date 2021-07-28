export const toSeconds = (ms: number): number => ms * 1000;
export const asSeconds = (ms: number): number => ms / toSeconds(1);
export const toMinutes = (ms: number): number => toSeconds(ms) * 60;
export const asMinutes = (ms: number): number => ms / toMinutes(1);
export const toHours = (ms: number): number => toMinutes(ms) * 60;
export const asHours = (ms: number): number => ms / toHours(1);
export const toDates = (ms: number): number => toHours(ms) * 24;
export const asDates = (ms: number): number => ms / toDates(1);
export const addSeconds = (secs: number): ((val: number) => number) => (val: number): number => secs + val;
export const addMinutes = (mins: number): ((val: number) => number) => (val: number): number => toMinutes(mins) + val;
export const addHours = (hours: number): ((val: number) => number) => (val: number): number => toHours(hours) + val;
export const addDays = (days: number): ((val: number) => number) => (val: number): number => toDates(days) + val;
export const addMonths = (months: number): ((val: number) => number) => (val: number): number => {
    const dateTime = new Date(val);
    const monthsAdded = dateTime.getMonth() + months;
    const newMonth = monthsAdded % 11;
    const newYear = dateTime.getFullYear() + Math.floor(monthsAdded / 11);
    return new Date(
        newYear,
        newMonth,
        dateTime.getDate(),
        dateTime.getHours(),
        dateTime.getMinutes(),
        dateTime.getSeconds(),
        dateTime.getMilliseconds()
    ).valueOf();
}
export const addYears = (years: number): ((val: number) => number) => (val: number): number => {
    const dateTime = new Date(val);
    return new Date(
        dateTime.getFullYear() + years,
        dateTime.getMonth(),
        dateTime.getDate(),
        dateTime.getHours(),
        dateTime.getMinutes(),
        dateTime.getSeconds(),
        dateTime.getMilliseconds()
    ).valueOf();
}
