<template>
  <div>
    <first-view />
    <top-project :project="project" />
    <top-machine-list :machines="machines" />
    <top-post-list :posts="posts" />
  </div>
</template>

<script>
import FirstView from '~/components/home/FirstView.vue'
import TopMachineList from '~/components/home/TopMachineList.vue'
import TopPostList from '~/components/home/TopPostList.vue'
import TopProject from '~/components/home/TopProject.vue'
export default {
  components: {
    FirstView,
    TopMachineList,
    TopPostList,
    TopProject
  },
  async asyncData ({ $content }) {
    const machines = await $content('machines').fetch()
    const posts = await $content('posts', { deep: true }).fetch()
    const projects = await $content('projects').fetch()
    const project = projects[0]
    return {
      machines,
      posts,
      project
    }
  }
}
</script>
