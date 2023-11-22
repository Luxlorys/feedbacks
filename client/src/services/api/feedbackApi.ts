import { Feedback } from "../../models/Feedback";
import { apiInterface } from "./apiInterface";

export class FeedbackApi implements apiInterface {
    async get(): Promise<Feedback[]> {
        try {
            const response = await fetch("https://back-feedback-barista.onrender.com/api/v1/get-feedbacks");

            if (!response.ok) {
                console.error(`GET request failed with status ${response.status}`);
                throw new Error(`GET request failed with status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            // Assuming data is an array of Feedback objects
            return data;
        } catch (error) {
            console.error('Error handling GET', error);
            throw error;
        }
    }
    async post(feedback: Feedback): Promise<void> {
        try {
            const response = await fetch("https://back-feedback-barista.onrender.com/api/v1/send-feedback", {
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
            throw error;
        }
            
    }
    
}