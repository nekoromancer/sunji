export interface IFunctor<T, R> {
    map(fn: (val: T) => R): R
    chain(fn: (val: T) => R): R
}
