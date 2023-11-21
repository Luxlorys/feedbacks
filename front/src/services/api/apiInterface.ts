import { Feedback } from "../../models/Feedback"

export interface apiInterface {
    get(id: string) : Promise<void>
    post(feedback: Feedback) : Promise<void>
    delete(id: string) : Promise<void>
}