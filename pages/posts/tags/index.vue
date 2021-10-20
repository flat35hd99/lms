<template>
  <v-row>
    <v-list
      v-for="tag in uniqueTags"
      :key="tag"
    >
      <v-list-item :to="`${tag}`">
        {{ tag }}
      </v-list-item>
    </v-list>
  </v-row>
</template>
<script>
export default {
  async asyncData ({ $content }) {
    const tags = await $content('posts', { deep: true }).only(['tags']).fetch()
    const tagsSet = new Set(tags.map((obj) => {
      const tagsArray = obj.tags
      return tagsArray
    }).flat())
    const uniqueTags = Array.from(tagsSet).sort()
    return { uniqueTags }
  }
}
</script>
