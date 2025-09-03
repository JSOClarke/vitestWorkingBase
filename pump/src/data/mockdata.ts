export type Question = {
  question: string;
  choice: string[];
  answer: number;
};

export const mockQuestions: Question[] = [
  {
    question: "Whos is a bastard man?",
    choice: ["Dennis", "Dee", "Mac", "Charlie"],
    answer: 0,
  },
  {
    question: "What is the name of Dee and Dennis Dad?",
    choice: ["Lenoard", "Sheldon", "Rajesh", "Frank"],
    answer: 3,
  },
];
