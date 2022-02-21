<script setup lang="ts"></script>

<template>
  <main>
    <div v-for="(blog, index) in blogs" :key="index">
      <h1>{{ blog.title }} </h1>
      <p>{{ blog.body }} </p>
      <b>{{ blog.author}} </b>
    </div>
  </main>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import axios from 'axios';

  export default {
    components: {
      RouterLink,
      RouterView
    },
    data() {
      return {
        blogs: new Array()
      }
    },
    async created() {
      let res = await axios.get('/api/blog/getAll');
      this.blogs = res.data;
    }
  };
</script>