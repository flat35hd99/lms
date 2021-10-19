<template>
  <v-row
    dense
  >
    <v-col
      v-for="content in contents"
      :key="content.path"
      cols="12"
    >
      <content-list-card :content="content" />
    </v-col>
  </v-row>
</template>

<script>
import ContentListCard from '~/components/content/ContentListCard.vue'
export default {
  components: {
    ContentListCard
  },
  props: {
    contents: {
      type: Array,
      required: true
    }
  }
}
</script>
