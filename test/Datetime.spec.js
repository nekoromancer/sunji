const expect = require('chai').expect;
const { Datetime } = require('../dist/index');

describe('Datetime is monadic?', () => {
    const value = new Date();
    const valid = Datetime.of(value);
    const f = x => new Date(x).valueOf();

    it('Left identity', () => {
        expect(valid.chain(f)).to.equal(f(value));
    });

    it ('Right identity', () => {
        expect(valid.chain(Datetime.of).orSome()).to.equal(valid.orSome());
    });
});

describe('Datetime.of', () => {
    it('(Some) is to be same new Date().valueOf(Some)', () => {
        const fromDt = Datetime.of('2021-01-01').orSome(0);
        const fromNative = new Date('2021-01-01').valueOf();

        expect(fromDt).to.equal(fromNative.valueOf());
    });

    it('Invalid Date type value should return InvalidTime', () => {
        const invalid = Datetime.of(null)
        expect(invalid.isValid).to.equal(false);
    });
});

describe('.map(fn) / helper function test', () => {
    const {
        addYears,
        addMonths,
        addDays,
        addHours,
        addMinutes,
        addSeconds,
        addMilliseconds,
    } = require('../dist/helpers/calc');

    it('addYears(n)', () => {
        const datetime = Datetime.of('2021-01-01');
        const plusYears = datetime.map(addYears(1)).dateObj.getFullYear();
        expect(plusYears).to.equal(2022);
    });

    it('addMonths(n)', () => {
        const datetime = Datetime.of('2021-01-01 00:00:00');
        const plusMonths = datetime.map(addMonths(2)).dateObj.getMonth();
        expect(plusMonths).to.equal(2);
    });

    it('addDays(n)', () => {
        const datetime = Datetime.of('2021-01-01 00:00:00');
        const plusDays = datetime.map(addDays(10)).dateObj.getDate();
        expect(plusDays).to.equal(11);
    });

    it('addHours(n)', () => {
        const datetime = Datetime.of('2021-01-01 12:00:00');
        const plusHours = datetime.map(addHours(-2)).dateObj.getHours();
        expect(plusHours).to.equal(10);
    });

    it('addMinutes(n)', () => {
        const datetime = Datetime.of('2021-01-01 12:00:00');
        const plusMinutes = datetime.map(addMinutes(-30)).dateObj.getMinutes();
        expect(plusMinutes).to.equal(30);
    });

    it('addSeconds(n)', () => {
        const datetime = Datetime.of('2021-01-01 12:00:00');
        const plusSeconds = datetime.map(addSeconds(-45)).dateObj.getSeconds();
        expect(plusSeconds).to.equal(15);
    });

    it('addMilliseconds(n)', () => {
        const datetime = Datetime.of('2021-01-01 12:00:00');
        const plusMilsecs = datetime.map(addMilliseconds(-625)).dateObj.getMilliseconds();
        expect(plusMilsecs).to.equal(375);
    });
})
