<template>
  <div id="app">
    <HelloWorld msg="Open Trivia Quizz, Vue.js version"/>
    <Game v-if="shown" :counter="counter"/>
    <button v-on:click="start">Start</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Game from './components/Game.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Game
  },
  data() {
    return {
    counter: -1,
    shown: false
    }
  },
  methods: {
    start: function() {
      this.counter = 0;
      this.shown = true;
      console.log(this.counter);
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
