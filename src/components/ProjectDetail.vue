<template>
    <div v-if="project" class="project-detail">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="image-gallery">
        <img v-for="(image, index) in project.images" :key="index" :src="image" :alt="`${project.title} - Image ${index + 1}`" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectDetail',
    props: {
      project: Object
    }
  }
  </script>
  
  <style scoped>
  .project-detail {
    flex: 2;
  }
  
  .image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
  }
  </style>