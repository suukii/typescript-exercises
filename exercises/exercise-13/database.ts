type fieldQuery<T> = { $eq: T } | { $gt: T } | { $lt: T } | { $in: T[] }

type Query<T extends {}> = {
    $text?: string
    $or?: Query<T>[]
    $and?: Query<T>[]
} & {
    [P in keyof T]?: fieldQuery<T[P]>
}
export class Database<T> {
    protected filename: string
    protected fullTextSearchFieldNames: (keyof T)[]

    constructor(filename: string, fullTextSearchFieldNames: (keyof T)[]) {
        this.filename = filename
        this.fullTextSearchFieldNames = fullTextSearchFieldNames
    }

    async find(query: Query<T>): Promise<T[]> {
        return []
    }
}
