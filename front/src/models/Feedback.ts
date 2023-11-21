export interface Feedback {
    barista: string
    score: number
    comment: string
    // TODO: remove date field (cause mongoose already put date to my model)
    // date: string
}