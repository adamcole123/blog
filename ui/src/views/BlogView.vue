<script setup lang="ts"></script>

<template>
  <main>
    <h1>{{ blog.title }}</h1>
    <div>{{ blog.author }} | {{ blog.datePublished }}</div>
    <sub>tags: {{ blog.tags }}</sub>
	<hr />
	<br>
    <pre class="blog-body">{{ blog.body }}</pre>
  </main>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";

export default {
  components: {
    RouterLink,
    RouterView,
  },
  data() {
    return {
      blog: {
        id: 0,
        title: "",
        body: "",
        author: "",
        datePublished: "",
        tags: "",
      },
    };
  },
  async beforeCreate() {
    await axios
      .get(`/api/blog/getOne/${this.$route.params.id}`)
      .then((res) => {
        this.blog = {
          id: res.data.id,
          title: res.data.title,
          body: res.data.body,
          author: res.data.author,
          datePublished: new Date(res.data.datePublished).toLocaleDateString(),
          tags: res.data.tags,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.blog-body{
  white-space: pre-wrap;
}
</style>
