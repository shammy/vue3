import { reactive } from 'vue';
import { testPosts } from './testPosts';

class Store {
  constructor() {
    this.state = reactive({
      currentTag: null,
      posts: testPosts,
    });
  }

  setHashtag(tag) {
    this.state.currentTag = tag;
  }

  incrementLike(post) {
    const thePost = this.state.posts.find((p) => {
      return p.id === post.id;
    });

    if (!thePost) {
      return;
    }

    thePost.likes += 1;
  }

  get filteredPosts() {
    if (!store.state.currentTag) {
      return store.state.posts;
    }
    return store.state.posts.filter((post) => post.hashtags.includes(store.state.currentTag));
  }
}

export const store = new Store();
