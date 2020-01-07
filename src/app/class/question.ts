import { Answer } from './answer';

export class Question {
  constructor(
    public questionID: number,
    public question: string,
    public categoryType: string,
    public questionType: string,
    public attachment: string,
    public possibleAnswers: Answer[],
    public givenAnswer: string[],
    public stateID: number
  ) { }

}
