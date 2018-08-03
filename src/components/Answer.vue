<template>
  <div class="row">
    <div class="col-md-4 pb-2">
      <b-button v-on:click='give_answer()' size="lg" >{{answer["answer"]}}</b-button>
    </div>
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
