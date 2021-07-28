import { ValidTime, InvalidTime } from '../Internal';

export default interface ITimestamp<T> {
    val: T
    isValid: boolean
    map(fn: (val: number) => number): ValidTime | InvalidTime<T>
    flatMap(fn: (val: number) => number): T
    dateMap(fn: (val: Date) => dateTimeValue): ValidTime | InvalidTime<any>
    getDate(): Date | T
    getDurations(date: ValidTime): number
    orSome<V>(val: V): T | V
}
