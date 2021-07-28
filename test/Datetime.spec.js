const expect = require('chai').expect;
const { Datetime } = require('../dist/index');

describe('Datetime.of', () => {
    it('(Some) is to be same new Date().valueOf(Some)', () => {
        const fromDt = Datetime.of('2021-01-01').orSome(0);
        const fromNative = new Date('2021-01-01').valueOf();

        expect(fromDt).to.equal(fromNative.valueOf());
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
        const plusYears = datetime.map(addYears(1)).getDate().getFullYear();
        expect(plusYears).to.equal(2022);
    });

    it('addMonths(n)', () => {
        const datetime = Datetime.of('2021-01-01 00:00:00');
        const plusMonths = datetime.map(addMonths(2)).getDate().getMonth();
        expect(plusMonths).to.equal(2);
    });

    it('addDays(n)', () => {
        const datetime = Datetime.of('2021-01-01 00:00:00');
        const plusDays = datetime.map(addDays(10)).getDate().getDate();
        expect(plusDays).to.equal(11);
    });

    it('addHours(n)', () => {
        const datetime = Datetime.of('2021-01-01 12:00:00');
        const plusHours = datetime.map(addHours(-2)).getDate().getHours();
        expect(plusHours).to.equal(10);
    });

    it('addMinutes(n)', () => {
        const datetime = Datetime.of('2021-01-01 12:00:00');
        const plusMinutes = datetime.map(addMinutes(-30)).getDate().getMinutes();
        expect(plusMinutes).to.equal(30);
    });

    it('addSeconds(n)', () => {
        const datetime = Datetime.of('2021-01-01 12:00:00');
        const plusSeconds = datetime.map(addSeconds(-45)).getDate().getSeconds();
        expect(plusSeconds).to.equal(15);
    });

    it('addMilliseconds(n)', () => {
        const datetime = Datetime.of('2021-01-01 12:00:00');
        const plusMilsecs = datetime.map(addMilliseconds(-625)).getDate().getMilliseconds();
        expect(plusMilsecs).to.equal(375);
    });
})
