<template>
  Hello World! <br>
  <Counter /> <br>
  <Counter :count="10" />
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  }
}
</script>

