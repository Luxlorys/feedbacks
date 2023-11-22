import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import { ChangeEvent, useState } from "react";
import { StarRating } from "./StarRating";
import { Feedback } from "../models/Feedback";
import { FeedbackApi } from "../services/api/feedbackApi";
import { validateFields } from "../utils/validationUtil";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface FeedbackApiProps {
  api: FeedbackApi;
}

export function FeedbackForm({ api }: FeedbackApiProps) {
  const [selectedBarista, setSelectedBarista] = useState<string>("");
  const [customBaristaName, setCustomBaristaName] = useState<string>("");
  const [selectedStar, setSelectedStar] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const toast = useToast();

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

  const handleSubmit = async () => {
    try {
      if (
        !validateFields(
          selectedBarista,
          customBaristaName,
          selectedStar,
          comment
        )
      ) {
        toast({description: 'Заповніть всі поля'});
        return;
      }

      const feedback: Feedback = {
        barista:
          selectedBarista === "Інший" ? customBaristaName : selectedBarista,
        score: selectedStar,
        comment: comment,
      };

      // await api.post(feedback);

      toast({
        title: 'Дякуємо за ваш відгук',
        status: 'success',
        onCloseComplete: () => {
          window.location.reload();
        },
      });
    } catch (err) {
      console.log(err);
    }
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
        <option>Андрій 🌻</option>
        <option>Марія 🦊</option>
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
        <Button
          onClick={handleSubmit}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline">
          Відправити відгук
      </Button>
      </Center>
    </FormControl>
  );
}
