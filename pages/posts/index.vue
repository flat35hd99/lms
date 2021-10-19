<template>
  <div>
    <topic-path />
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
  async asyncData ({ $content }) {
    const contents = await $content('posts', { deep: true }).fetch()
    contents.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      }
      if (a.date > b.date) {
        return -1
      }
      return 0
    })
    return { contents }
  },
  head () {
    return {
      title: '全記事'
    }
  }
}
</script>
