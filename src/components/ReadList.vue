<template>
<div class="wrapper">
  <div class="books">
    <div class="book" v-for="book in books" :key="book.id">
      <div class="image">
        <img :src="'/images/'+book.image">
      </div>
      <div class="info">
        <h1>{{book.title}}</h1>
        <p>{{book.series}}</p>
      </div>
      <div class="unmark">
        <button @click="unmark(book)" href="#" class="auto">Unmark</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ReadList',
  props: {
    books: Array
  },
  methods: {
    unmark(book) {
      console.log('removing: ' + book.title);
      let index = this.$root.$data.read.findIndex(x => x.id === book.id);
      this.$root.$data.read.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.books {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.book {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.book img {
  height: 300px;
  width: 200px;
  object-fit: cover;
}

.book .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.unmark {
  margin-top: 5px;
}

.info {
  background: #282A35;
  color: white;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

button:hover {
  background: #282A35;
  border-style: solid;
  border-color: #000;
}

.auto {
  margin-left: auto;
}
</style>
