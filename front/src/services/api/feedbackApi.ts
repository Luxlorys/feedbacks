import { Feedback } from "../../models/Feedback";
import { apiInterface } from "./apiInterface";

export class FeedbackApi implements apiInterface {
    async get(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async post(feedback: Feedback): Promise<void> {
        try {
            const response = await fetch("http://127.0.0.1:3001/api/v1/send-feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(feedback)
            });
            const data = await response.json();
            console.log('Data successfully sent:', data);
        } catch (error) {
            console.log('Error sending feedback:', error);
        }
            
    }
    async delete(id: string): Promise<void>{
        throw new Error("Method not implemented.");
    }
    
}