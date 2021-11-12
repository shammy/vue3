<template>
  <div id="wrapper">
    <div>
      <label>Search hashtag:</label>
      <input :value="currentTag" placeholder="#vue" @input="handleInput" />
    </div>
    <div class="cards">
      <card v-for="post in filteredPosts" :key="post.id">
        <template v-slot:title> {{ post.title }} </template>
        <template v-slot:content>
          {{ post.content }}
        </template>
        <template v-slot:description>
          <controls :post="post" />
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import Card from './Card.vue';
import Controls from './Controls.vue';
import { store } from './store.js';

export default {
  components: {
    Card,
    Controls,
  },

  setup() {
    const handleInput = ($event) => {
      store.setHashtag($event.target.value);
    };

    return {
      currentTag: computed(() => store.state.currentTag),
      handleInput,
      filteredPosts: computed(() => store.filteredPosts),
    };
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
}
input,
label {
  font-size: 30px;
}
input {
  height: 30px;
  width: 200px;
  padding: 5px;
  margin: 5px;
  margin: 30px;
}
#wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
