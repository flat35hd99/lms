<template>
  <div>
    <first-view />
    <top-machine-list :machines="machines" />
    <top-post-list :posts="posts" />
    <top-project-list :projects="projects" />
  </div>
</template>

<script>
import FirstView from '~/components/home/FirstView.vue'
import TopMachineList from '~/components/home/TopMachineList.vue'
import TopPostList from '~/components/home/TopPostList.vue'
import TopProjectList from '~/components/home/TopProjectList.vue'
export default {
  components: {
    FirstView,
    TopMachineList,
    TopPostList,
    TopProjectList
  },
  async asyncData ({ $content }) {
    const machines = await $content('machines').fetch()
    const posts = await $content('posts', { deep: true }).fetch()
    return {
      machines,
      posts
    }
  },
  data () {
    return {
      projects: [
        {
          name: 'hogehoge'
        }
      ]
    }
  }
}
</script>
