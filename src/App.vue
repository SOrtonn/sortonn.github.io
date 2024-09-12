<template>
  <div id="app">
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/projects">Projects</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

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