<template>
  <v-row>
    <v-col cols="12">
      <h2>
        記事一覧
      </h2>
    </v-col>
    <v-col
      v-for="post in posts"
      :key="post.path"
      lg="3"
      md="6"
      sm="12"
    >
      <v-card>
        <v-img
          :src="post.thumbnail"
        />
        <v-card-title>{{ post.title }}</v-card-title>
        <v-container
          style="padding: 0px"
        >
          <v-row no-gutters>
            <v-col>
              <v-card-text>{{ post.description }}</v-card-text>
            </v-col>
            <v-col>
              <v-btn
                icon
                color="indigo"
                :to="post.path"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    posts: {
      required: true,
      type: Array
    }
  }
}
</script>
