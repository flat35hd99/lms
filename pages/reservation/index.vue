<template>
  <div>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.name"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
      >
        <v-card>
          <v-img :src="card.img" />
          <v-card-title
            v-text="card.title"
          />
          <v-card-text
            v-text="card.text"
          />
          <v-card-actions>
            <v-btn
              :to="card.to"
              nuxt
              color="primary"
            >
              表示する
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        <h2
          id="for_beginner"
        >
          初めてご利用の方へ
        </h2>
        <p>
          ライブラリーメイカースペースは利用者が安全に機器を利用していただくため、複数種の安全講習を行っています。
          利用者の方には利用をはじめる前に、これらの講習を受けていただき、かつ、機器それぞれの操作説明を受けていただきます。
        </p>
        <v-timeline>
          <v-timeline-item>NUCTで講習を受ける</v-timeline-item>
          <v-timeline-item>ライブラリーメイカースペース営業時間中に訪問し、直接講習を受ける</v-timeline-item>
          <v-timeline-item>ウェブ予約</v-timeline-item>
          <v-timeline-item>利用開始</v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          title: '初めてご利用の方へ',
          to: '#for_beginner',
          img: '/reservation/explanation.jpg',
          text: '初めてご利用の方は実地での講習とNUCT上の二つの講習の計3つの講習を受けていただく必要があります。'
        },
        {
          title: '講習受講済みの方へ',
          to: '/reservation/reserve_machines',
          img: '/reservation/form.png',
          text: 'すでにご利用されている方・講習がお済みのかたはこちらへ'
        }
      ]
    }
  }
}
</script>
