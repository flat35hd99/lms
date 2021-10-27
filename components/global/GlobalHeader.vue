<template>
  <div>
    <v-app-bar
      app
      hide-on-scroll
    >
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <v-img
          src="SD_NULib_mini.png"
          height="2rem"
          contain
        />
      </v-toolbar-title>
      <v-tabs class="d-none d-md-flex">
        <v-tab
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          nuxt
        >
          {{ link.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          nuxt
        >
          {{ link.name }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {
          path: '/',
          name: 'Home'
        },
        {
          path: '/projects/green-belt-diorama',
          name: 'Project'
        },
        {
          path: '/posts',
          name: 'Post'
        },
        {
          path: '/machines',
          name: 'Machine'
        }
      ]
    }
  }
}
</script>
