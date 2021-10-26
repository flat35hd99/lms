<template>
  <v-row>
    <v-col cols="12">
      <h2>
        マシン一覧
      </h2>
    </v-col>
    <v-col
      v-for="machine in machines"
      :key="machine.path"
      lg="3"
      md="6"
      sm="12"
    >
      <v-card>
        <v-img
          :src="machine.thumbnail"
        />
        <v-card-title>{{ machine.title }}</v-card-title>
        <v-container
          style="padding: 0px"
        >
          <v-row no-gutters>
            <v-col>
              <v-card-text>{{ machine.description }}</v-card-text>
            </v-col>
            <v-col>
              <v-btn
                icon
                color="indigo"
                :to="machine.path"
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
    machines: {
      required: true,
      type: Array
    }
  }
}
</script>
