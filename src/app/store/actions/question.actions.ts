import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Question} from '../../model';

@Injectable()
export class QuestionActions {

  static LOAD_QUESTIONS = 'LOAD_QUESTIONS';
  loadQuestions(): Action {
    return {
      type: QuestionActions.LOAD_QUESTIONS
    };
  }

  static LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
  // loadQuestionsSuccess(questions: Question[]): Action {
  //   return {
  //     type: QuestionActions.LOAD_QUESTIONS_SUCCESS,
  //     payload: questions
  //   };
  // }

  static ADD_QUESTION = 'ADD_QUESTION';
  // addQuestion(question: Question): Action {
  //   return {
  //     type: QuestionActions.ADD_QUESTION,
  //     payload: question
  //   };
  // }
  

  static ADD_QUESTION_SUCCESS = 'ADD_QUESTION_SUCCESS';
  // addQuestionSuccess(question: Question): Action {
  //   return {
  //     type: QuestionActions.ADD_QUESTION_SUCCESS,
  //     payload: question
  //   };
  // }

}

export class AddQuestion implements Action {
  readonly type = QuestionActions.ADD_QUESTION;

  constructor(public payload) { }
}

export class AddQuestionSuccess implements Action {
  readonly type = QuestionActions.LOAD_QUESTIONS_SUCCESS;

  constructor(public payload) { }
}

export class loadQuestions implements Action {
  readonly type = QuestionActions.ADD_QUESTION_SUCCESS;

  // constructor(public payload: string) { }
}
export class LoadQuestionsSuccess implements Action {
  readonly type = QuestionActions.LOAD_QUESTIONS_SUCCESS;

  constructor(public payload: Question[]) { }
}

export type Actions = loadQuestions| LoadQuestionsSuccess | AddQuestionSuccess | AddQuestion