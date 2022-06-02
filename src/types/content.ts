export type content = {
  testTitle: string;
  question: string;
  answers: [
    {
      choice: string;
      result: string;
      resultDetail: string;
    }
  ];
};
