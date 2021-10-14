<template>
<div @click="mode = !mode" class="cursor-pointer">
  <div
    class="bg-red-500 py-10 px-5 w-48 text-blue-400 font-bold bg-cover"
    :style="{ backgroundImage: 'url(' + url + ')' }"
    v-show="mode"
  >
    <h1 class="font-black text-2xl mix-blend-difference">{{ tagline }}</h1>
    {{ subline }}
  </div>
  <div v-show="!mode" class="bg-white py-10 px-5 w-48">
      This is a fake ad
  </div>
</div>
</template>

<script>
export default {
  fetch() {
    let ads = [
      [
        'Buy Coke',
        'The most refreshing drink',
        'https://media.npr.org/assets/img/2015/11/19/salt-iconic-branding-0037edit_custom-106133bb015b56c78e6bd554cfcbc9cc648156bb.jpg',
      ],
      [
        '',
        '',
        'https://d2z1w4aiblvrwu.cloudfront.net/ad/I2nd/default-large.jpg',
      ],
      [
        'Drink Pepsi',
        'More than 50% of people love it',
        'https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/03/21/ap-pepsi-new-bottle-16_9.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
      ],
    ]
    let [tagline, subline, url] = ads[Math.floor(Math.random() * ads.length)]
    this.tagline = tagline
    this.subline = subline
    this.url = url
  },
  data() {
    return {
      tagline: '',
      subline: '',
      url: '',
      mode: true,
    }
  },
}
</script>

<style></style>
