<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link to="/">
          <v-img
            src="favicon.ico"
            height="20"
            contain
          />
        </nuxt-link>
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
          :to="link.key"
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
          link: '/posts',
          name: 'Posts'
        },
        {
          link: '/machines/3d-printer',
          name: 'Machine'
        }
      ]
    }
  }
}
</script>
