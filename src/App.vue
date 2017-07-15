<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Vue.js and Firebase Sample Blog</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Create new Blog Entry</h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addBlog">
          <div class="form-group">
            <label for="blogtitle">Title</label>
            <input v-model="newBlog.title" type="text" id="blogtitle" class="form-control"/>
          </div>
          <div class="form-group">
            <label for="blogauthor">Author</label>
            <input v-model="newBlog.author" type="text" id="blogauthor" class="form-control"/>
          </div>
          <div class="form-group">
            <label for="blogtext">Text</label>
            <input v-model="newBlog.text" type="text" id="blogtext" class="form-control"/>
          </div>
          <input type="submit" class="btn btn-default" value="Add Blog!"/>
        </form>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import database from './util/database';
  const blogRef = database.ref('blog');

  export default {
    name: 'app',
    firebase: {
        blogs: blogRef,
    },
    data() {
      return {
        newBlog: {
          author: '',
          title: '',
          text: '',
        },
      };
    },
    methods: {
      addBlog: function() {
        blogRef.push(this.newBlog);
        this.newBlog.author = '';
        this.newBlog.title = '';
        this.newBlog.text = '';
        toastr.success('Blog added!');
      },
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
