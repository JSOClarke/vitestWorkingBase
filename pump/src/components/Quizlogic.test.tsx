import { describe, expect, it } from "vitest";
import { updateScoreOnChoice, type Score } from "../utils/quizlogic";

describe("updateScoreOnChoice", () => {
  it("increments if choice is correct", () => {
    const prevScore: Score = { correct: 0, questionsAnswered: 1 };
    // Correct Question // Score and question answered should increase by 1. 0-> 1 SCORE 1-2 -> QANSWERED
    const newScore: Score = updateScoreOnChoice(1, 1, prevScore);
    const expectedScore: Score = { correct: 1, questionsAnswered: 2 };
    expect(newScore).toEqual(expectedScore);
  });

  it("increments if choice is incorrect", () => {
    const prevScore: Score = { correct: 0, questionsAnswered: 1 };

    const newScore: Score = updateScoreOnChoice(1, 2, prevScore);
    const expectedScore: Score = { correct: 0, questionsAnswered: 2 };
    expect(newScore).toEqual(expectedScore);
  });
});
