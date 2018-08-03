import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
  score: 0,
  counter: 0,
  questions: [],
  shown: false,
  msg: 'Open Trivia Quizz, Vue.js version'
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
