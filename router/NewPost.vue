<template>
  <div>
    <h3>New Post</h3>
    <div>
      <form @submit.prevent="submit">
        <input v-model="newPost.title" placeholder="Title" />
        <br /><br />
        <textarea cols="50" rows="10" v-model="newPost.content" />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { usePosts } from "./usePosts.js";
export default {
  setup() {
    const postStore = usePosts();
    const router = useRouter();

    const newPost = reactive({
      title: "",
      content: "",
    });

    const submit = () => {
      const id = postStore.posts.value.length + 1;
      postStore.addPost({
        id,
        title: newPost.title,
        content: newPost.content,
      });
      router.push(`/posts/${id}`);
    };

    return {
      newPost,
      submit,
    };
  },
};
</script>
