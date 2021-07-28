"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addYears = exports.addMonths = exports.addDays = exports.addHours = exports.addMinutes = exports.addSeconds = exports.addMilliseconds = exports.asDates = exports.toDates = exports.asHours = exports.toHours = exports.asMinutes = exports.toMinutes = exports.asSeconds = exports.toSeconds = void 0;
const toSeconds = (ms) => ms * 1000;
exports.toSeconds = toSeconds;
const asSeconds = (ms) => ms / exports.toSeconds(1);
exports.asSeconds = asSeconds;
const toMinutes = (ms) => exports.toSeconds(ms) * 60;
exports.toMinutes = toMinutes;
const asMinutes = (ms) => ms / exports.toMinutes(1);
exports.asMinutes = asMinutes;
const toHours = (ms) => exports.toMinutes(ms) * 60;
exports.toHours = toHours;
const asHours = (ms) => ms / exports.toHours(1);
exports.asHours = asHours;
const toDates = (ms) => exports.toHours(ms) * 24;
exports.toDates = toDates;
const asDates = (ms) => ms / exports.toDates(1);
exports.asDates = asDates;
const addMilliseconds = (milsecs) => (val) => milsecs + val;
exports.addMilliseconds = addMilliseconds;
const addSeconds = (secs) => (val) => exports.toSeconds(secs) + val;
exports.addSeconds = addSeconds;
const addMinutes = (mins) => (val) => exports.toMinutes(mins) + val;
exports.addMinutes = addMinutes;
const addHours = (hours) => (val) => exports.toHours(hours) + val;
exports.addHours = addHours;
const addDays = (days) => (val) => exports.toDates(days) + val;
exports.addDays = addDays;
const addMonths = (months) => (val) => {
    const dateTime = new Date(val);
    const monthsAdded = dateTime.getMonth() + months;
    const newMonth = monthsAdded % 11;
    const newYear = dateTime.getFullYear() + Math.floor(monthsAdded / 11);
    return new Date(newYear, newMonth, dateTime.getDate(), dateTime.getHours(), dateTime.getMinutes(), dateTime.getSeconds(), dateTime.getMilliseconds()).valueOf();
};
exports.addMonths = addMonths;
const addYears = (years) => (val) => {
    const dateTime = new Date(val);
    return new Date(dateTime.getFullYear() + years, dateTime.getMonth(), dateTime.getDate(), dateTime.getHours(), dateTime.getMinutes(), dateTime.getSeconds(), dateTime.getMilliseconds()).valueOf();
};
exports.addYears = addYears;
//# sourceMappingURL=calc.js.map