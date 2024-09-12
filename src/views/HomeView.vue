<template>
    <div class="home">
      <h2>Welcome to My Portfolio</h2>
      <p>Here you can find information about my projects</p>
      <router-link to="/projects" class="cta-button">View My Projects</router-link>
    </div>
  </template>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }
  
  .cta-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #3aa876;
  }
  </style>