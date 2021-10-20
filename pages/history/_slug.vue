<template>
  <div>
    <div
      v-if="!$fetchState.error"
      class="flex items-center justify-center flex-col"
    >
      <div class="mb-3 flex items-center justify-center flex-col">
        <div v-if="article.image" class="max-w-64">
          <img class="max-w-xl" :src="article.image" />
        </div>

        <h1 class="font-black font-newspaper text-4xl">{{ article.title }}</h1>
        <span class="font-light text-gray-500">By {{ article.author }}</span>
      </div>
      <article class="prose">
        <NuxtContent class="prose flex-1" :document="article"></NuxtContent>
        <div v-if="seeAlso">
          See also:
          <nuxt-link :to="`/history/${seeAlso.slug}`">{{
            seeAlso.title
          }}</nuxt-link>
        </div>
      </article>
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
    return { title: `${this.article.title}` }
  },
  data() {
    return {
      article: {},
      seeAlso: false
    }
  },
  async fetch() {
    this.article = await this.$content(
      'articles',
      this.$route.params.slug
    ).fetch()

    if (this.article.seeAlso) {
      this.seeAlso = await this.$content('articles', this.article.seeAlso)
      .only(['title', 'slug'])
      .fetch() 
      }
  },
}
</script>

<style></style>
