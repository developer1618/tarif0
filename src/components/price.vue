<template>
   <div class="">
    <div class="flow-root bg-gray-900 pt-48 pb-16 lg:pb-0">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="relative z-10">
          <h2 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">Выберите техническую поддержку к сайту</h2>
        </div>
        <div class="relative mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div class="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10" aria-hidden="true" />
          <div v-for="tier in tiers" :key="tier.id" :class="[tier.featured ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10' : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0', 'relative rounded-2xl']">
            <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
              <div class="flex gap-4 items-center ">
                <h3 :class="[tier.featured ? 'text-gray-900' : 'text-white', 'text-2xl font-semibold leading-6']">{{ tier.name }}</h3>
                <p :class="[tier.featured ? 'text-gray-900' : 'text-white', 'text-4xl tracking-tight']" class="line-through">{{ tier.price.old }}</p>
              </div>
              <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                <div class="mt-2 flex items-center gap-x-4">
                  <div class="text-sm leading-5">
                    <p :class="tier.featured ? 'text-gray-900' : 'text-white'"> <span class="text-4xl font-bold">{{tier.price.monthly}}</span> Сомони</p>
                    <p :class="tier.featured ? 'text-gray-500' : 'text-gray-400'">В месяц</p>
                  </div>
                </div>
                <a href="#contacts" :class="[tier.featured ? 'bg-[#00a82d] shadow-sm focus-visible:outline-indigo-600' : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white', 'rounded-md py-2 px-3 text-center text-sm hover:bg-[#374151] font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2']"
                @click="changeTariff(tier)">Приобрести</a>
              </div>
              <div class="mt-8 flow-root sm:mt-10">
                <ul role="list" :class="[tier.featured ? 'divide-gray-900/5 border-gray-900/5 text-gray-600' : 'divide-white/5 border-white/5 text-white', '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0']">
                  <li v-for="(mainFeature, index) in tier.mainFeatures" :key="index" class="flex gap-x-3 py-2">
                    <CheckIcon :class="[tier.featured ? 'text-indigo-600' : 'text-gray-500', 'h-6 w-5 flex-none']" aria-hidden="true" />
                    <p>{{ mainFeature }}</p>
                    <img width="16" height="16" src="../assets/present.svg" alt="Present Icon"
                    v-if="mainFeature.includes('Корпоративная почта в подарок')">
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p class="text-white mt-6 text-center text-2xl">
          * Акция действует до конца месяца. {{text}}: <span class="text-[#00a82d]">{{remains}}</span>
        </p>
      </div>
    </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import { CheckIcon } from '@heroicons/vue/20/solid'
import moment from 'moment'
export default {
  name: 'Price',
  components: {
    CheckIcon
  },
  computed: {
    ...mapState({
      tiers: state => state.tiers
    })
  },
  data() {
    return {
      stockTerm: moment('2023-08-31'),
      remains: '',
      minute: 2,
      second: 5,
      interval: null,
      text: 'Осталось дней'
    }
  },
  methods: {
    ...mapMutations({
      change_state: 'CHANGE_STATE'
    }),
    changeTariff(tier) {
      let payload = {
        key: 'form',
        body: {
            fullname: '',
            phone: '',
            service: tier.name
        }
      }
      this.change_state(payload)
    },
    counter() {
      this.remains = this.stockTerm.diff(moment(), 'days')
    },
    counterDay() {
      this.minute = 24
      this.second = 59
      if(this.minute !== 0) {
        this.interval = setInterval(() => {
          if(this.second !== 0) {
            this.second--
          } else {
            this.minute--
            if(this.minute !== 0) {
              this.second = 59
            }
          }
          this.remains = this.minute + ':' + this.second
        }, 1000)
      }
      
    }
  },
  mounted() {
    this.counter()
  },
  watch: {
    remains() {
      if(this.remains == 0) {
        this.text = 'Осталось времени'
        this.counterDay()
      }
    },
    minute() {
      if(this.minute == 0 && this.second == 0) {
        clearInterval(this.interval)
        this.remains = 'Время закончилось'
      }
    }
  }
}
</script>