<template>
  <div class="wrapper">
    <h1>Sort by series</h1>
    <div class="select">
      <select v-model="select">
        <option value="The Stormlight Archive">The Stormlight Archive</option>
        <option value="The Mistborn Saga">The Mistborn Saga</option>
        <option value="The Mistborn Saga - The Wax & Wayne Series">The Mistborn Saga - The Wax & Wayne Series</option>
        <option value="Standalone">Standalone</option>
        <option value="White Sand">White Sand</option>
        <option value="Skyward">Skyward</option>
        <option value="The Reckoners">The Reckoners</option>
        <option value="Alcatraz Vs the Evil Librarians">Alcatraz Vs the Evil Librarians</option>
        <option value="Short Fiction">Short Fiction</option>
        <option value="The Wheel of Time">The Wheel of Time</option>
        <option value="Unfettered">Unfettered</option>
        <option value="Infinity Blade">Infinity Blade</option>
      </select>
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
      select: '',
    }
  },
  computed: {
    books() {
      console.log('showing books from ' + this.select);
      return this.$root.$data.books.filter(book => book.series.toLowerCase().search(this.select.toLowerCase()) >= 0);
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
  justify-content: center;
  background-color: #2c3e50;
}

select {
  height: 35px;
  width: 50%;
  color: #000;
}
</style>
