<template>
  <div class="blog-entries">
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
  import database from '../util/database';

export default {
  name: 'blog-entries',
  firebase: {
    blogs: database.ref('blog'),
  },
  methods: {
    removeBlog: function(blog) {
      database.ref('blog').child(blog['.key']).remove();
      toastr.error('Blog removed!');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .onclick {
    cursor: pointer;
  }
  .onclick:hover {
    color: gray;
  }
</style>
