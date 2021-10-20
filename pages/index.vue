<template>
  <div>
    <div class="flex flex-row">
      <div>
        <lazy-fake-ad />
      </div>
      <div class="flex flex-1 justify-center items-center flex-col">
        <h1 class="font-black text-4xl mb-2">Featured</h1>
        <div class="flex flex-1 justify-center w-7/12">
          <div
            class="bg-gray-100 w-96 break-words rounded-md m-2 p-5"
            v-for="article of articles"
            :key="article.slug"
          >
            <nuxt-link :to="`/history/${article.slug}`"
              ><h1 class="font-bold text-2xl">
                {{ article.title }}
              </h1></nuxt-link
            >
            <span class="font-light text-gray-400">
              By {{ article.author }}</span
            >
            <p class="break-words">{{ article.description }}</p>
          </div>
        </div>
        <nuxt-link class="font-bold italic" to="/browse">Read more</nuxt-link>
      </div>
      <div>
        <lazy-fake-ad />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return { title: 'Home' }
  },
  data() {
    return {
      articles: [],
    }
  },

  async fetch() {
    this.articles = [
      await this.$content(
        'articles',
        'articles-of-confederation'
      ).fetch(),
    ]
  },
}
</script>
