<template>
  <div>{{ msg }}</div>
  <input v-model="msg" />
  <!-- msg variable does support two-way binding  -->
  <button @click="increment">{{ count }}</button>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Options!!',
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

<style scoped></style>
