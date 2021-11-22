import { createStore } from 'vuex';
import { testPosts } from '../microblog/testPosts.js';

const delay = () =>
  new Promise((res) => {
    setTimeout(res, 1000);
  });

const posts = {
  namespaced: true,
  state() {
    return {
      postId: null,
      posts: [],
    };
  },
  mutations: {
    setPostId(state, postId) {
      state.postId = postId;
    },

    setPosts(state, posts) {
      state.posts = posts;
    },
  },

  actions: {
    async fetchPosts({ commit }) {
      await delay();
      commit('setPosts', testPosts);
    },
  },

  getters: {
    currentPost(state) {
      return state.posts.find((post) => {
        return post.id === state.postId;
      });
    },
  },
};

export const store = createStore({
  modules: {
    posts,
  },
});
