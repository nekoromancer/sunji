import { IFunctor, IValuable, IValidationCheck } from '../Internal';

export interface IDuration<T> extends IFunctor<T, any>, IValuable<T>, IValidationCheck {}
