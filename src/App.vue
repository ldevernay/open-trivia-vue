<template>
  <div id="app">
    <HelloWorld msg="Open Trivia Quizz, Vue.js version"/>
    <Game v-if="shown" :questions="questions" :counter="counter"/>
    <button v-on:click="start" v-if="!shown">Start</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Game from './components/Game.vue';

const https = require('https');
const _ = require('lodash');

export default {
  name: 'app',
  components: {
    HelloWorld,
    Game
  },
  data() {
    return {
    counter: -1,
    shown: false,
    questions: []
    }
  },
  methods: {
    start: function() {
      this.counter = 0;
      this.shown = true;
      this.questions_api();
    },
    questions_api: function() {
    const url = 'https://opentdb.com/api.php?amount=5&category=18';
    let result;

  https
    .get(url, res => {
      let body = '';

      res.on('data', chunk => (body += chunk));

      res.on('end', function() {
        let openTriviaResponse = JSON.parse(body);
        result = questions(openTriviaResponse.results);
        return result;
      });
    })
    .on('error', e => {
      return e;
    });

  let questions = res => {
    let results = [];
    res.map(question => {
      let quest = {};
      let answers = [];
      quest['question'] = question['question'];
      answers.push({
        answer: question['correct_answer'],
        correct: true
      });
      question['incorrect_answers'].map(ans => {
        answers.push({
          answer: ans,
          correct: false
        });
      });
      quest['answers'] = _.shuffle(answers);
      results.push(quest);
    });
    this.questions = results;
  };

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
