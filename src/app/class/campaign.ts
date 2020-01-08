import { AmountOfQuestionTypeCollection } from './amountOfQuestionTypeCollection';

export class Campaign {
  id: number;
  name: string;
  amountOfQuestions: AmountOfQuestionTypeCollection;
  startedBy: string;
  category: string;
  participants: string;
  date: number;

  constructor(name: string, amountOfQuestions: AmountOfQuestionTypeCollection) {
    this.name = name;
    this.amountOfQuestions = amountOfQuestions;
  }
}
