<template>
  <div>
    <b-button v-on:click='give_answer()' size="lg" >{{answer["answer"]}}</b-button>
  </div>
</template>

<script>

export default {
  name: 'Answer',
  props: {
    answer: Object
  },
  methods: {
    give_answer: function(){
      this.$store.dispatch('answer', this.answer["correct"]);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
