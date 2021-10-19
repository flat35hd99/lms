<template>
  <div>
    <topic-path class="pl-1" />
    <content-list :contents="contents" />
  </div>
</template>

<script>
import TopicPath from '~/components/TopicPath.vue'
import ContentList from '~/components/content/ContentList.vue'
export default {
  components: {
    ContentList,
    TopicPath
  },
  async asyncData ({ $content, params }) {
    const tag = params.slug
    const contents = await $content('contents', { deep: true }).where({ tags: { $contains: tag } }).sortBy('date', 'desc').fetch()
    return {
      contents,
      tag
    }
  },
  head () {
    return {
      title: this.tag
    }
  }
}
</script>
