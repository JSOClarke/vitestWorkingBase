import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Quizbox from "./Quizbox";
import { describe, it, expect } from "vitest";

describe("Quizbox", () => {
  it("renders the first question", () => {
    render(<Quizbox />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /question/i
    );
  });

  it("updates score when correct answer is selected", () => {
    render(<Quizbox />);

    // click the first correct answer
    const correctChoice = screen.getByText(/Dennis/); // <- adjust to match your mockdata
    fireEvent.click(correctChoice);

    expect(screen.getByText(/1\/1 Correct/)).toBeInTheDocument();
  });
});
