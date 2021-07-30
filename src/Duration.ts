import { IDuration } from './Internal';

export class Duration<T> implements IDuration<T> {
    public val: T

    constructor (val: T) {
        this.val = val;
    }

    public static of<V> (val: V): Duration<V> {
        return new Duration(val);
    }

    public get isValid(): boolean {
        return !!this.val;
    }

    map<R> (fn: (val: T) => R): Duration<R> | Duration<T> {
        return this.isValid ? new Duration(fn(this.val)) : this;
    }

    chain<R> (fn: (val: T) => R): R | Duration<T> {
        return this.isValid ? fn(this.val) : this;
    }

    orSome<V> (val: V): T | V {
        return this.isValid ? this.val : val;
    }
}
