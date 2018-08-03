<template>
  <div class="game">
    <h3> Score : {{this.$store.state.score}}</h3>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
