<template>
<div>
  <h1>Search by title</h1>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <BookList :books="books" />
</div>
</template>

<script>
import BookList from "../components/BookList.vue"
export default {
  name: 'Home',
  components: {
    BookList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    books() {
      return this.$root.$data.books.filter(book => book.title.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>

<style scoped>
h1 {
  padding: 50px;
  background-color: #2c3e50;
  margin: 0px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c3e50;
  height: 100%;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
  color: black;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
