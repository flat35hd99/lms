<template>
  <div class="content">
    <nuxt-content :document="content" />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.article-title {
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
.nuxt-content {
  h1 {
    @extend .headline;
    font-size: 1.25rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.15rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.05rem;
    font-weight: 500;
  }
  h4 {
    font-size: 0.95;
    font-weight: 600;
  }
  p {
    line-height: 2.0rem;
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: auto;
      text-align: center;
    }
  }
}
</style>
