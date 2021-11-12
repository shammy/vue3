<template>
  <div>{{ msg }}</div>
  <input v-model="msg" />
  <!-- msg variable does not support two-way binding   -->
  <button @click="increment">{{ count }}</button>
  <!-- ref unwrapping .value happens in the background -->
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>

  <p>{{ total }}</p>
</template>

<script>
import { computed, ref, reactive, watch, watchEffect } from 'vue';
export default {
  setup() {
    const msg = ref('Hello'); // opt-in reactivity by using ref

    const count = ref(0); // need to use value to modify object value

    // ref -> string, number values
    // reactive -> objects and complex values

    const numbers = reactive({
      a: 0,
      b: 0,
    });

    const increment = () => {
      count.value++;
    };

    const increase = (n) => {
      numbers[n]++;
    };

    const total = computed(() => {
      return count.value + numbers.a + numbers.b;
    });

    return {
      count,
      increment,
      increase,
      msg,
      numbers,
      total,
    };
  },
};
</script>

<style scoped>
button {
  height: 100px;
  width: 100px;
  font-size: 4rem;
}

p {
  font-size: 4rem;
}
</style>
