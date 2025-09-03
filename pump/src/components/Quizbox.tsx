import { useState } from "react";
import { mockQuestions, type Question } from "../data/mockdata";

type Score = {
  correct: number;
  questionsAnswered: number;
};

export default function Quizbox() {
  const [questionDeck, setQuestionDeck] = useState<Question[]>(mockQuestions);
  const [selectedQ, setSelectedQ] = useState<number>(0);
  const [isChoiceSelected, setIsChoiceSelected] = useState<boolean>(false);
  const [selectedChoice, setSelectedChoice] = useState<number>();
  const [score, setScore] = useState<Score>({
    correct: 0,
    questionsAnswered: 0,
  });

  function handleChoiceSelection(idx: number) {
    setSelectedChoice(idx);
    setIsChoiceSelected(true);
    if (idx === questionDeck[selectedQ].answer) {
      setScore((prev: Score) => ({ ...prev, correct: prev.correct + 1 }));
    }
    setScore((prev: Score) => ({
      ...prev,
      questionsAnswered: prev.questionsAnswered + 1,
    }));
  }
  function handleNextQuestionClick() {
    setIsChoiceSelected(false);
    setSelectedQ((prev) => prev + 1);
  }

  return (
    <div className="quiz__container">
      <h3 className="quiz__score">
        {`${score.correct}/${score.questionsAnswered}`}{" "}
        {isChoiceSelected
          ? selectedChoice === questionDeck[selectedQ].answer
            ? "Correct"
            : "Incorrect"
          : null}
      </h3>
      <h2 className="quiz__question">{`Question ${selectedQ + 1} ${
        questionDeck[selectedQ].question
      }`}</h2>
      <div className="quiz__choice__container">
        {questionDeck[selectedQ].choice.map((i, idx) => {
          const isSelectedChoiceCorrect =
            questionDeck[selectedQ].answer === idx;
          return (
            <button
              key={idx}
              className={`quiz__choice ${
                isChoiceSelected
                  ? isSelectedChoiceCorrect
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleChoiceSelection(idx)}
            >
              {i}
            </button>
          );
        })}
      </div>
      <button
        className="quiz__next-question"
        onClick={() => handleNextQuestionClick()}
      >
        Next Question
      </button>
    </div>
  );
}
