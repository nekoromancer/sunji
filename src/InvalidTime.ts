import Datetime from "./Datetime";
import ITimestamp from "./Interfaces/ITimestamp";

export default class InvalidTime<T> extends Datetime implements ITimestamp<T> {
    public val: T

    public constructor (val: T) {
        super();
        this.val = val;
    }

    public static of<V> (val: V): InvalidTime<V> {
        return new InvalidTime<V>(val);
    }

    public get isValid (): boolean {
        return false;
    }

    public map (): InvalidTime<T> {
        return this;
    }

    public flatMap (): T {
        return this.val;
    }

    public dateMap (): InvalidTime<T> {
        return this;
    }

    public dateFlatMap (): T {
        return this.val;
    }

    public getDate (): T {
        return this.val;
    }

    public getDurations (): number {
        return 0;
    }

    public orSome<V> (someVal: V): T | V {
        return someVal ? someVal : this.val;
    }
}
