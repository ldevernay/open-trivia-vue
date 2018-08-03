import * as types from './mutation-types';

export const start = ({ commit }) => {
  commit(types.START);
};

export const answer = ({ commit }, score_payload) => {
  commit(types.ANSWER, score_payload);
};

export const setQuestions = ({ commit }, questions_payload) => {
  commit(types.SET_QUESTIONS, questions_payload);
};
