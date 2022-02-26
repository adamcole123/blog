<script setup lang="ts"></script>

<template>
  <main>
    <div v-for="(blog, index) in blogs" :key="index">
      <RouterLink v-bind:to="'/blog/' + blogs[index].id"><h1>{{ blog.title }} </h1></RouterLink>
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
    async beforeCreate() {
      let res = await axios.get('/api/blog/getAll');
      this.blogs = res.data;

      this.blogs.forEach(blog => {
        blog.body = blog.body.substring(0, 300) + '...';
      });
    }
  };
</script>