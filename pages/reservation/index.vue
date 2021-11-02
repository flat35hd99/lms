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
      <v-col>
        <v-card>
          <v-card-title
            id="for_beginner"
          >
            初めてご利用の方へ
          </v-card-title>
          <v-card-text>
            ライブラリーメイカースペースは利用者が安全に機器を利用していただくため、複数種の安全講習を行っています。
            利用者の方には利用をはじめる前に、これらの講習を受けていただき、かつ、機器それぞれの操作説明を受けていただきます。
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-timeline>
          <v-timeline-item
            v-for="event in events"
            :key="event.title"
          >
            <v-card>
              <v-card-title v-text="event.title" />
              <v-card-text v-text="event.text" />
            </v-card>
          </v-timeline-item>
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
      ],
      events: [
        {
          title: 'NUCTで講習',
          text: '「一般安全教育」と「実験一般安全教育」の2つを受講し、小テストに合格してください。'
        },
        {
          title: '直接講習',
          text: 'NUCTの講習受講後、ライブラリーメイカースペースを訪問して職員から講習を受けてください。'
        },
        {
          title: '予約',
          text: '利用には予約が必要です。機構IDを取得済みであれば、ウェブ予約できます。'
        },
        {
          title: '利用開始',
          text: '予約した時刻にライブラリーメイカースペースに来て、利用したい機材について操作説明を受けます。'
        }
      ]
    }
  }
}
</script>
