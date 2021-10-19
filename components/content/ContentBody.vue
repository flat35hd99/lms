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
