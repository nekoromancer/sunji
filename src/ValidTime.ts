import Datetime from "./Datetime";
import InvalidTime from "./InvalidTime";
import ITimestamp from "./Interfaces/ITimestamp";

export default class ValidTime extends Datetime implements ITimestamp<number> {
    public val: number;

    public constructor (val: dateTimeValue) {
        super();

        if (val instanceof Date) {
            this.val = val.valueOf();
        } else if (typeof val === 'string') {
            this.val = new Date(val).valueOf();
        } else {
            this.val = val;
        }
    }

    public get isValid (): boolean {
        return true;
    }

    public static of (val: Date | number | string): ValidTime {
        return new ValidTime(val);
    }

    public map (fn: (val: number) => number): ValidTime | InvalidTime<number> {
        const timestamp: number = fn(this.val);
        const dateTime: Date = new Date(timestamp);

        if (isNaN(dateTime.getTime())) {
            return new InvalidTime(timestamp);
        } else {
            return new ValidTime(timestamp);
        }
    }

    public flatMap (fn: (val: number) => number): number {
        return fn(this.val);
    }

    public dateMap (fn: (val: Date) => dateTimeValue): ValidTime {
        return new ValidTime(fn(new Date(this.val)));
    }

    public dateFlatMap<T> (fn: (val: Date) => T): T {
        return fn(new Date(this.val));
    }

    public getDate (): Date {
        return new Date(this.val)
    }

    public getDurations (date: ValidTime | InvalidTime<any>): number | any {
        return date.flatMap(t => t - this.val);
    }

    public orSome (): number {
        return this.val;
    }
}
