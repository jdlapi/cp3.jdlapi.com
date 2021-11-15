<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Books</router-link> |
      <router-link to="/series">Series</router-link> |
      <router-link to="/read">Read</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1 class="header">Brandon Sanderson Novel Database</h1>
    <router-view/>
    <div class="footer">
      <p>Justin Lapicola</p>
      <a href="https://github.com/BYUCS260/grocery-store-jdlapi.git">github repository</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FEFFFF;
  background-color: #282A35;
  min-height: 100vh;
}

.header {
    color: #282A35;
    background-color: #2c3e50;
    margin: 0px;
    padding-top: 30px;
}

#nav {
  padding: 30px;
  background-color: #2c3e50;
  border-left: 70px;
  border-right: 70px;
  border-top: 10px;
  border-bottom: 30px;
  border-color: #282A35;
  border-style: solid;
}

#nav a {
  font-weight: bold;
  color: #FEFFFF;
}

#nav a.router-link-exact-active {
  color: #8EA1B6;
  font-weight: bold;
}

/* Format footer */
.footer {
  display: flex;
  height: 75px;
  justify-content: space-around;
  background-color: #282A35;
}

.footer a {
  margin-top: 20px;
  color: white;
}
</style>
