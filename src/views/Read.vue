<template>
  <div class="wrapper">
    <h1>Finished books:</h1>
    <h2 v-if="empty">You haven't read any Brandon Sanderson books... Get Reading!</h2>
    <ReadList :books="books"/>
  </div>
</template>

<script>
import ReadList from "../components/ReadList.vue"
export default {
  name: 'Read',
  components: {
    ReadList
  },
  computed: {
    books() {
      return this.$root.$data.read;
    },
    empty() {
      if (this.$root.$data.read.length === 0) {
        return true;
      }
      return false;
    }
  },
}
</script>

<style scoped>
h1 {
  padding-top: 50px;
  padding-bottum: 0px;
  background-color: #2c3e50;
  margin: 0px;
}

.wrapper {
  justify-content: center;
  background-color: #2c3e50;
}
</style>
