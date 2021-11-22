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
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const click = (post) => {
      store.commit("posts/setPostId", post.id);
    };

    const fetchData = () => {
      store.dispatch("posts/fetchPosts");
    };

    onMounted(() => {
      fetchData();
    });

    return {
      click,
      currentPost: computed(() => store.getters["posts/currentPost"]),
      posts: computed(() => store.state.posts.posts),
      postId: computed(() => store.state.postId),
    };
  },
};
</script>

<style scoped>
body {
  font-size: 40px;
}
</style>
