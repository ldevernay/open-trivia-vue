<template>
  <div class="answer">
    <h4>
      {{answer["answer"]}}
    </h4>
  </div>
</template>

<script>

export default {
  name: 'Answer',
  props: {
    answer: Object
  },
  data() {
    return {};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
