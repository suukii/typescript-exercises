declare module 'str-utils' {
    type strFunc = (value: string) => string

    export const strReverse: strFunc
    export const strToLower: strFunc
    export const strToUpper: strFunc
    export const strRandomize: strFunc
    export const strInvertCase: strFunc
}
