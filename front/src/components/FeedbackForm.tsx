import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

import { ChangeEvent, useState } from "react";
import { StarRating } from "./StarRating";
import { v4 as uuid } from "uuid";
import { Feedback } from "../models/Feedback";
import { SendFeedbackAlert } from "./SendFeedbackAlert";
import { FeedbackApi } from "../services/api/feedbackApi";
import { validateFields } from "../utils/validationUtil";

interface FeedbackApiProps {
  api: FeedbackApi
}

export function FeedbackForm({api} : FeedbackApiProps) {
  const [selectedBarista, setSelectedBarista] = useState<string>("");
  const [customBaristaName, setCustomBaristaName] = useState<string>("");
  const [selectedStar, setSelectedStar] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleStarChange = (value: number) => {
    setSelectedStar(value);
  };

  const handleChangeBarista = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedBarista(value);

    // Reset the custom barista name when "Інший" is selected
    if (value === "Інший") {
      setCustomBaristaName("");
    }
  };

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setComment(value);
  };


  const handleSubmit = () => {
    if (!validateFields(selectedBarista, customBaristaName, selectedStar, comment)) {
      // TODO: change to toast notify
      alert('Заповніть всі поля для відправки відгуку')
      return;
    }
    
    // TODO: change Date format to +2 
    const feedback: Feedback = {
      barista:
        selectedBarista === "Інший" ? customBaristaName : selectedBarista,
      score: selectedStar,
      comment: comment,
    };


    api.post(feedback)
      .then(() => {
        // TODO: change alert window to toast notification library 
        alert('Дякуємо за ваш відгук');
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <FormControl className="formControl" width={"65%"} height={"auto"}>
      <FormLabel>Бариста</FormLabel>
      <Select
        value={selectedBarista}
        onChange={handleChangeBarista}
        isRequired={true}
        placeholder="Оберіть бариста"
      >
        <option>Андрій</option>
        <option>Марія</option>
        <option>Інший</option>
      </Select>

      {selectedBarista === "Інший" && (
        <>
          <FormLabel mt={5}>Інший бариста</FormLabel>
          <Input
            onChange={(e) => setCustomBaristaName(e.target.value)}
            type="text"
          />
          <FormHelperText>Впишіть ім'я бариста тут</FormHelperText>
        </>
      )}

      <FormLabel mt={4}>Оцінка</FormLabel>
      <StarRating onStarChange={handleStarChange} />

      <FormLabel mt={4}>Коментар</FormLabel>
      <Textarea
        isRequired={true}
        value={comment}
        onChange={handleCommentChange}
        placeholder="Відкритий відгук"
      />

      <Center mt={5}>
        <SendFeedbackAlert onSubmit={handleSubmit} />
      </Center>
    </FormControl>
  );
}

