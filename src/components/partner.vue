<template>
  <div class="bg-gray-900 px-6 sm:px-0 py-4 sm:py-48">
    <div class="relative z-10 pb-12"><h2 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">Проекты</h2></div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 rounded-2xl md:grid-cols-3">
        <a v-for="partner in partners" :key="partner.id" :href="partner.link" target="_blank" class="bg-white/5 hover:bg-[#374151] p-6 sm:p-16">
          <img class="max-h-12 w-full object-contain" :src="partner.img" :alt="partner.name" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Partner',
    data() {
      return {
        partners: [
          {
            id: 1,
            img: require('../assets/partners/Your.svg'),
            name: 'BNP',
            link: 'http://bnp.tj/'
          },
          {
            id: 2,
            img: require('../assets/partners/IDF.svg'),
            name: 'IDF',
            link: 'http://idf.tj/'
          },
          {
            id: 3,
            img: require('../assets/partners/JURAT.svg'),
            name: 'Love Radio',
            link: 'https://https://www.love-radio.tj/'
          },
        ]
      }
    }
}
</script>