<template>
  <div>
    <v-row
      v-for="project in projects"
      :key="project.path"
    >
      <p>{{ project.name }}</p>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      required: true,
      type: Array
    }
  }
}
</script>
