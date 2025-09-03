import { useState } from "react";
import { mockQuestions, type Question } from "../data/mockdata";
import { type Score, updateScoreOnChoice } from "../utils/quizlogic";

export default function Quizbox() {
  const [questionDeck, setQuestionDeck] = useState<Question[]>(mockQuestions);
  const [selectedQ, setSelectedQ] = useState<number>(0);
  const [isChoiceSelected, setIsChoiceSelected] = useState<boolean>(false);
  const [selectedChoice, setSelectedChoice] = useState<number>();
  const [score, setScore] = useState<Score>({
    correct: 0,
    questionsAnswered: 0,
  });

  function handleChoiceSelection(selectedChoice: number) {
    setSelectedChoice(selectedChoice);
    setIsChoiceSelected(true);
    const updatedScore = updateScoreOnChoice(
      selectedChoice,
      questionDeck[selectedQ].answer,
      score
    );
    setScore(updatedScore);
  }

  function handleNextQuestionClick() {
    setIsChoiceSelected(false);
    setSelectedQ((prev) => prev + 1);
  }

  return (
    <div className="quiz__container">
      <h3 className="quiz__score" id="quiz-score">
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
              data-testid={`choice-${idx}`}
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
