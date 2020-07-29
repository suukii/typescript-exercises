declare module 'stats' {
    type Comparator<T> = (x: T, b: T) => number
    type StatsFunc = <T, U>(input: T[], comparator: Comparator<T>) => U

    export const getMaxIndex: StatsFunc
    export const getMaxElement: StatsFunc
    export const getMinIndex: StatsFunc
    export const getMinElement: StatsFunc
    export const getMedianIndex: StatsFunc
    export const getMedianElement: StatsFunc
    export const getAverageValue: StatsFunc
}
