type fieldQuery<T> = { $eq: T } | { $gt: T } | { $lt: T } | { $in: T[] }

type Query<T extends {}> = {
    $text?: string
    $and?: Query<T>[]
    $or?: Query<T>[]
} & {
    [P in keyof T]?: fieldQuery<T[P]>
}

type Option<T> = {
    [P in keyof T]?: 1 | -1
}

type Options<T extends {}> = {
    sort?: Option<T>
    projection?: Option<T>
}

export class Database<T> {
    protected filename: string
    protected fullTextSearchFieldNames: (keyof T)[]

    constructor(filename: string, fullTextSearchFieldNames: (keyof T)[]) {
        this.filename = filename
        this.fullTextSearchFieldNames = fullTextSearchFieldNames
    }

    async find(query: Query<T>, options?: Options<T>): Promise<T[]> {
        return []
    }
}
