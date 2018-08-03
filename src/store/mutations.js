import * as types from './mutation-types';

export const mutations = {
  [types.START](state) {
    state.counter = 0;
    state.score = 0;
    state.shown = true;
    state.msg = 'May the code be with you';
  },
  [types.ANSWER](state, score_payload) {
    if (!score_payload) {
      state.counter = -1;
      state.msg = `Wrong answer, your final score is ${this.score}!`;
      state.shown = false;
    } else {
      state.score++;
      if (state.counter < 5) {
        state.counter++;
      } else {
        state.counter = -1;
        state.msg = 'Congratulations, you just finished the game';
      }
    }
  },
  [types.SET_QUESTIONS](state, questions_payload) {
    state.questions = questions_payload;
  }
};
