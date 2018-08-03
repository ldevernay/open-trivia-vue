<template>
  <div class="game">
    <h2>Let's play a game!</h2>
      <Question :question='this.$store.state.questions[this.$store.state.counter]["question"]' />
      <Answer v-for='(answer, index) in this.$store.state.questions[this.$store.state.counter]["answers"]' :answer='answer' :key='index' />
  </div>
</template>

<script>
import Question from './Question.vue';
import Answer from './Answer.vue';

export default {
  name: 'Game',
  components: {
    Answer,
    Question
  },
  // props: {
  //   questions: {
  //     default: [{
  //       'question': 'Want to play a game?',
  //       'answers': [
  //         {'question': 'yes', 'correct': true},
  //         {'question': 'no', 'correct': false}
  //       ]
  //     }],
  //     type: Array
  //   },
  //   counter: {
  //     default: 0,
  //     type: Number
  //   }
  // },
  // data() {
  //   return {};
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
