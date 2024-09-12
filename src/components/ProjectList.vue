<template>
    <div class="project-list">
      <h2>My Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.id" @click="$emit('select-project', project)">
          {{ project.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectList',
    props: {
      projects: Array
    }
  }
  </script>
  
  <style scoped>
  .project-list {
    flex: 1;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    cursor: pointer;
    padding: 10px;
    margin-bottom: 5px;
    background-color: #f0f0f0;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  li:hover {
    background-color: #e0e0e0;
  }
  </style>