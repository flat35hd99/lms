<template>
  <div>
    <v-row
      justify="center"
    >
      <v-col cols="12" sm="10" md="10" lg="7" xl="7">
        <topic-path />
      </v-col>
      <v-col cols="12" sm="10" md="10" lg="7" xl="7">
        <h1 class="post-title">
          <span>{{ post.title }}</span>
        </h1>
        <span class="text--disabled creation_date">作成日時: {{ post.date }}</span>
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col cols="12" sm="10" md="10" lg="7" xl="6">
        <content-body :content="post" />
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col
        xs="12"
        sm="10"
        md="10"
        lg="7"
        xl="7"
      >
        <span
          v-for="tag in post.tags"
          :key="tag"
        >
          <nuxt-link
            :to="`/posts/tags/${tag}`"
            style="text-decoration: none;"
          >
            <v-icon>mdi-tag</v-icon>
            {{ tag }}
          </nuxt-link>
        </span>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      dense
    >
      <v-col
        xs="12"
        sm="10"
        md="10"
        lg="7"
        xl="7"
      >
        <h1
          style="font-size: 1.2rem"
          class="pl-1"
        >
          関連記事
        </h1>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      dense
    >
      <v-col
        xs="12"
        sm="10"
        md="10"
        lg="7"
        xl="7"
      >
        <content-list :contents="categorizedContents" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TopicPath from '~/components/TopicPath.vue'
import ContentList from '~/components/content/ContentList.vue'
import ContentBody from '~/components/content/ContentBody.vue'

export default {
  components: {
    ContentBody,
    TopicPath,
    ContentList
  },
  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.category, params.slug).fetch()
    // 関連記事に現在表示している記事を表示しないようにする部分。
    let categorizedContents = await $content('posts', params.category).limit(6).fetch()
    categorizedContents = categorizedContents.filter((post) => {
      return post.slug !== params.slug
    })
    return {
      post,
      categorizedContents,
      params
    }
  },
  head () {
    return {
      title: `${this.post.title} | ${this.params.category}`
    }
  }
}
</script>

<style lang="scss">
.post-title {
  font-size: 1.4rem;
}
.creation_date {
  font-size: 0.7rem
}
.headline {
  border-bottom: solid 1px rgb(221,221,221);
  margin-top: 49px;
  margin-bottom: 24px;
}
.nuxt-post {
  h1 {
    @extend .headline;
    font-size: 1.25rem;
    font-weight: 400;
  }
}
</style>
