const expect = require('chai').expect;
const { Datetime, Duration } = require('../dist/index');

describe('Duration is monadic?', () => {
    const value = new Date().getTime();
    const duration = Duration.of(value);
    const f = x => `${x} milliseconds`;

    it('Left identity', () => {
        expect(duration.chain(f)).to.equal(f(value));
    });

    it ('Right identity', () => {
        expect(duration.chain(Duration.of).orSome()).to.equal(duration.orSome());
    });
});

describe('Get duration value from Datetime', () => {
    const from = Datetime.of('2021-01-01');
    const to = Datetime.of('2021-01-11');
    const invalid = Datetime.of(null);
    const { asDays } = require('../dist/helpers/calc');

    it('Get duration between two datetime as days', () => {
        expect(from.getDurations(to).chain(asDays)).to.equal(10);
        expect(to.getDurations(from).chain(asDays)).to.equal(-10);
    });

    it('If invalid value pass into getDurations as parameter, it should return null / someValue', () => {
        expect(from.getDurations(invalid).val).to.equal(null);
        expect(from.getDurations(invalid).orSome(undefined)).to.equal(undefined);
        expect(invalid.getDurations(from).val).to.equal(null);
        expect(invalid.getDurations(from).orSome(undefined)).to.equal(undefined);
    });
});
