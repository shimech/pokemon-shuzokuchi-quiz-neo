import { useQuizCondition } from "./useQuizCondition";
import type { QuizCondition } from "@/types/QuizCondition";

export const useQuizConditionContextProvider = (
  initialValue: QuizCondition,
) => {
  const { quizCondition, ...setQuizCondition } = useQuizCondition(initialValue);

  return {
    quizCondition,
    setQuizCondition,
  };
};
