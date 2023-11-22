import { useEffect, useState } from "react";
import { Feedback } from "../models/Feedback.ts";
import { FeedbackApi } from "../services/api/feedbackApi.ts";
import ReactStars from 'react-rating-star-with-type'


interface FeedbackApiProps {
    api: FeedbackApi
}

export default function FeedbacksList({ api }: FeedbackApiProps) {

    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const data = await api.get();

                if (isMounted) setFeedbacks(data);
                console.log(feedbacks);
            } catch (error) {
                console.error(error);
                throw error;
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [api])

    return (
        <div>
            <h1>Feedbacks</h1>
            
            <ul>
                {feedbacks.map((feedback) => (
                    <div key={feedback._id}>
                        <h3>Бариста: {feedback.barista}</h3>
                        <ReactStars 
                            value={feedback.score}
                            count={5}
                            isEdit={false}
                            size={16}
                            activeColors={[ "#FFCE00"]
                        } />
                        <p>{feedback.comment}</p>
                        <p>{feedback.date}</p>
                        <br />
                    </div>
                ))}
            </ul>
        </div>
    )
}