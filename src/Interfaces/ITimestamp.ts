import { Datetime, ValidTime, InvalidTime, Duration, IFunctor, IValuable, IValidationCheck} from '../Internal';

export interface ITimestamp<T> extends IFunctor<T, Datetime>, IValuable<T>, IValidationCheck {
    dateObj: Date | T
    getDurations (date: Datetime): Duration<number | null>
}
