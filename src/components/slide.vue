<template>
  <div class="isolate bg-gray-900 pt-48">
    <div class="main__container">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center pb-10">Веб разработка за <br> 0 сомони</h1>
    </div>
    <carousel :settings="settings">
      <slide v-for="slide in sliders" :key="slide.id">
        <div class="main__container">
          <main>
            <div class="relative">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                  <p class="mt-6 text-lg leading-8 text-gray-300">{{slide.text}}</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </slide>
      <template #addons>
      <Navigation />
      <Pagination/>
    </template>
    </carousel>
  </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination, } from 'vue3-carousel'
export default {
  name: 'Slider',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        arrows: true,
        wrapAround: true,
        autoplay: 5000,
      },
      sliders: [
        {
          id: 1,
          title: 'Веб разработка за 0 сомони',
          text: 'Получите бесплатно современный и функциональный сайт на базе передовых технологий веб-разработки.'
        },
        {
          id: 2,
          title: 'Веб разработка за 0 сомони',
          text: 'Получите техническую поддержку из целого штата web-разботчиков, маркетологов, QA и UI специалистов.'
        },
        {
          id: 3,
          title: 'Веб разработка за 0 сомони',
          text: 'Получите продвижение сайта и высокий поисковой потенциал. Так клиентам будет легко находить информацию о компании и ёё услугах.'
        },
      ]
    }
  }
}
</script>
<style scoped>
::v-deep .carousel__prev  {
  background: #0f2045;
  color: white;
  left: 2%;
  border-radius: 12px;
}
::v-deep .carousel__next {
  background: #0f2045;
  color: white;
  right: 2%;
  border-radius: 50%;
}
@media screen and (max-width: 640px) {
  ::v-deep .carousel__prev {
    display: none;
  }
}
@media screen and (max-width: 640px) {
  ::v-deep .carousel__next {
    display: none;
  }
}
::v-deep .carousel__pagination {
  display: none;
}
@media screen and (max-width: 640px) {
  ::v-deep .carousel__pagination {
    display: flex;
  }
}
::v-deep .carousel__pagination-button::after {
  background: white;
  width: 30px;
  height: 5px;
  border-radius: 6px;
}
::v-deep .carousel__pagination-button--active::after {
  background: #00a82d;
}
::v-deep .carousel__prev--disabled  {
  display: none;
}
::v-deep .carousel__next--disabled  {
  display: none;
}
</style>