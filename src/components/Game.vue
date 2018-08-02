<template>
  <div class="game">
    <h1>Welcome to the game, questions : {{questions}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    questions: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
