<template>
  <div>
    <content-list :contents="contents" />
  </div>
</template>

<script>
import ContentList from '~/components/content/ContentList.vue'
export default {
  components: {
    ContentList
  },
  async asyncData ({ $content }) {
    const contents = await $content('machines', { deep: true }).fetch()
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
      title: 'マシンリスト'
    }
  }
}
</script>
