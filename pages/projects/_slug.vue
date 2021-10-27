<template>
  <article>
    <v-img
      :src="project.thumbnail"
      class="white--text align-end"
    >
      <h1
        style="text-align: right;"
      >
        {{ project.title }}
      </h1>
    </v-img>
    <nuxt-content :document="project" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()
    return {
      project
    }
  }
}
</script>
