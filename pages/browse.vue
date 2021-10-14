<template>
  <div>
    <div class="flex flex-1 justify-center items-center flex-col">
      <h1 class="font-black text-4xl mb-2">Browse</h1>
      <div class="flex flex-1 justify-center">
      <div class="bg-white w-64  m-2 p-5 break-words" v-for="article of articles" :key="article.slug">
        <nuxt-link :to="`/history/${article.slug}`"><h1 class="font-bold text-2xl">{{ article.title }}</h1></nuxt-link>
        <span class="font-light text-gray-400"> By {{ article.author }}</span>
        <p>{{ article.description }}</p>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [],
    }
  },
  async fetch() {
    let data = await this.$content('articles').fetch();
    this.articles = data;
  },
}
</script>
