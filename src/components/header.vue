<template>
  <header class="bg-gray-900">
    <div class="main__container px-6 pt-6 lg:px-8">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <img class="w-12 h-12" src="../assets/logo.svg" alt="Livo Logo"/>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-white">{{ item.name }}</a>
        </div>
        <div style="line-he" class="lg:flex lg:flex-1 lg:justify-end">
          <a href="#contacts" class="text-base font-semibold leading-6 text-white py-2 px-4 bg-[#00a82d] rounded-xl">Оставить заявку</a>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
    name: 'Header',
    data() {
      return {
        navigation: [
          { name: 'О нас', href: 'https://livo.tj' },
          { name: 'Контакты', href: '#contacts' },
        ]
      }
    }
}
</script>