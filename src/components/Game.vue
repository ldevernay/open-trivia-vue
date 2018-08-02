<template>
  <div class="game">
    <h1>Welcome to the game, counter = {{counter}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    counter: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
