<template>
  <v-row>
    <v-col>
      <v-parallax :src="project.thumbnail">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <!-- TODO: プロジェクトのデータフォーマットを決定する。 -->
            <h2 class="text-h4 font-weight-thin mb-4">
              グリーンベルトジオラマ化計画
            </h2>
            <h4 class="subheading">
              グリーンベルトの保存
            </h4>
            <v-btn
              icon
              :to="project.path"
              color="red"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    project: {
      required: true,
      type: Object
    }
  }
}
</script>
