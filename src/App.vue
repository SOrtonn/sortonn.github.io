<template>
  <div id="app">
    <h1>Vue is working if you can see this!</h1>
    <header>
      <h2>Sam Orton</h2>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/projects">Projects</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

nav {
  padding: 20px 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>