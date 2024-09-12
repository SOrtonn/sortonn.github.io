<template>
    <div class="projects">
      <ProjectList :projects="projects" @select-project="selectProject" />
      <ProjectDetail v-if="selectedProject" :project="selectedProject" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import ProjectList from '@/components/ProjectList.vue'
  import ProjectDetail from '@/components/ProjectDetail.vue'
  
  export default {
    components: {
      ProjectList,
      ProjectDetail
    },
    setup() {
      const projects = ref([
        { id: 1, title: 'Project 1', description: 'Description for Project 1', images: ['https://picsum.photos/id/1018/400/300', 'https://picsum.photos/id/1015/400/300'] },
        { id: 2, title: 'Project 2', description: 'Description for Project 2', images: ['https://picsum.photos/id/1019/400/300', 'https://picsum.photos/id/1016/400/300'] },
        // Add more projects as needed
      ])
  
      const selectedProject = ref(null)
  
      const selectProject = (project) => {
        selectedProject.value = project
      }
  
      return {
        projects,
        selectedProject,
        selectProject
      }
    }
  }
  </script>
  
  <style scoped>
  .projects {
    display: flex;
    gap: 30px;
  }
  </style>