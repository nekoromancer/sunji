export interface IValuable<T> {
    val: T
    orSome<V>(val: V): T | V
}
