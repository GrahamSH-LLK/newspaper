<template>
<div>
    <div v-if="!$fetchState.error">
      <div class="mb-3">
    <h1 class="font-black font-newspaper text-4xl">{{ article.title }}</h1>
    <span>By {{ article.author }}</span>
      </div>
    <NuxtContent class="prose" :document="article"></NuxtContent>
    </div>
    <div v-else>
        <h1 class="font-black text-4xl">Error 404</h1>
        Page not found
    </div>
</div>
</template>

<script>
export default {
  head() {
    return {title: this.article.title}
  },
  data() {
    return {
      article: {},
    }
  },
  async fetch() {
      this.article = await this.$content('articles', this.$route.params.slug).fetch()
  },
}
</script>

<style></style>
