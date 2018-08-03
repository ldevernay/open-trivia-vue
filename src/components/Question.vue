<template>
  <div class="question">
    <h3>
      {{question}}
    </h3>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: {
    question: String
  },
  data() {
    return {};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
