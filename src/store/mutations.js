import * as types from './mutation-types';

export const mutations = {
  [types.START](state) {
    state.counter = 0;
    state.score = 0;
    state.shown = true;
  },
  [types.ANSWER](state, score_payload) {
    if (score_payload) {
      state.counter = -1;
      state.shown = false;
    } else {
      state.counter++;
      state.score++;
    }
  },
  [types.SET_QUESTIONS](state, questions_payload) {
    state.questions = questions_payload;
  }
};
