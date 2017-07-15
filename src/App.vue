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
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Blog Entries</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Titel</th>
              <th>Author</th>
              <th>Text</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="blog in blogs">
              <td>{{ blog.title }}</td>
              <td>{{ blog.author }}</td>
              <td>{{ blog.text }}</td>
              <td><span class="onclick glyphicon glyphicon-trash" v-on:click="removeBlog(blog)"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDmohfWVSL1716I-VkUVp8hkWB2MePab3M",
    authDomain: "blogexample-33295.firebaseapp.com",
    databaseURL: "https://blogexample-33295.firebaseio.com",
    projectId: "blogexample-33295",
    storageBucket: "blogexample-33295.appspot.com",
    messagingSenderId: "849369740716"
  };
  const app = Firebase.initializeApp(config);
  const db = app.database();
  const blogsRef = db.ref('blog');

  export default {
    name: 'app',
    firebase: {
        blogs: blogsRef,
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
        blogsRef.push(this.newBlog);
        this.newBlog.author = '';
        this.newBlog.title = '';
        this.newBlog.text = '';
        toastr.success('Blog added!');
      },
      removeBlog: function(blog) {
        blogsRef.child(blog['.key']).remove();
        toastr.error('Blog removed!');
      }
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
  .onclick {
    cursor: pointer;
  }
  .onclick:hover {
    color: gray;
  }
</style>
