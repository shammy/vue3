<template>
  <button v-for="post in posts" :key="post.id" @click="click(post)">
    {{ post.title }}
  </button>

  <div v-if="currentPost">
    <h1>
      {{ currentPost.title }}
    </h1>
    <p>{{ currentPost.content }}</p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("posts/fetchPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
    currentPost() {
      return this.$store.getters["posts/currentPost"];
    },
  },
  methods: {
    click(post) {
      this.$store.commit("posts/setPostId", post.id);
    },
  },
};
</script>

<style scoped>
body {
  font-size: 40px;
}
</style>
