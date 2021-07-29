import { Datetime, Duration, ITimestamp, dateTimeValue } from './Internal';

export class ValidTime extends Datetime implements ITimestamp<number> {
    public val: number;

    public constructor (val: number) {
        super();
        this.val = val;
    }

    public get isValid (): boolean {
        return true;
    }

    public get dateObj (): Date {
        return new Date(this.val)
    }

    public map (fn: (val: number) => dateTimeValue): Datetime {
        return Datetime.of(fn(this.val));
    }

    public chain (fn: (val: number) => Datetime): Datetime {
        return fn(this.val);
    }

    public getDurations(): Duration<number> {
        return new Duration(this.val);
    }

    public orSome (): number {
        return this.val;
    }
}
