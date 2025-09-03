export type Score = {
  correct: number;
  questionsAnswered: number;
};

export function updateScoreOnChoice(
  selectedChoice: number,
  correctChoice: number,
  prevScore: Score
) {
  const updatedCorrect =
    selectedChoice === correctChoice
      ? prevScore.correct + 1
      : prevScore.correct;
  const updatedQAnswered = prevScore.questionsAnswered + 1;
  const updateScore: Score = {
    correct: updatedCorrect,
    questionsAnswered: updatedQAnswered,
  };
  return updateScore;
}
