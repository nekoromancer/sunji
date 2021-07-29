import { Datetime, Duration, ITimestamp } from "./Internal";

export class InvalidTime<T> extends Datetime implements ITimestamp<T> {
    public val: T

    public constructor (val: T) {
        super();
        this.val = val;
    }

    public get isValid (): boolean {
        return false;
    }

    public get dateObj (): T {
        return this.val;
    }

    public map (): InvalidTime<T> {
        return this;
    }

    public chain (): InvalidTime<T> {
        return this;
    }

    public getDurations (): Duration<T> {
        return new Duration(this.val);
    }

    public orSome<V> (someVal: V): T | V {
        return someVal ? someVal : this.val;
    }
}
