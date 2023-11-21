import { Feedback } from "../../models/Feedback"

export interface apiInterface {
    get() : Promise<Feedback[]>
    post(feedback: Feedback) : Promise<void>
}