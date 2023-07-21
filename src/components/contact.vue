<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div id="contacts" class="relative isolate bg-gray-900 pt-16">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pt-4 pb-20 sm:pt-4 lg:static lg:pb-48 lg:px-8">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
            <svg class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="100%" y="-1" class="overflow-visible fill-gray-800/20">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
            </svg>
            <svg class="absolute top-[calc(100%-13rem)] -left-56 w-[72.1875rem] transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]" viewBox="0 0 1155 678" aria-hidden="true">
              <path fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)" fill-opacity=".2" d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z" />
              <defs>
                <linearGradient id="0a9a5302-e517-46c6-85f0-d826aa6a313e" x1="1155.49" x2="-78.208" y1="677.823" y2="203.355" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4F46E5" />
                  <stop offset="1" stop-color="#80CAFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-white">Контакты</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">Оставьте заявку, даже если Вы хотите просто спросить о продукте. Мы с Вами свяжемся. </p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-white" href="tel:+(992) 88 8835 660">+(992) 88 8835 660</a></dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-white" href="mailto:info@livo.tj">info@livo.tj</a></dd>
            </div>
          </dl>
        </div>
      </div>
      <form @submit.prevent="sendApplication" class="px-6 pb-12 pt-4 sm:pb-32 lg:pb-48 lg:px-8">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <Input id="fullname" label="Имя" v-model="form.fullname"/>
            <Phone id="phone" label="Телефон" v-model="form.phone"/>
            <Select id="service" label="Тариф" :list="tiers" :active="form.service"/>
          </div>
          <div class="mt-8 flex justify-end">
            <button :disabled="disableButton" type="submit" 
            class="rounded-md bg-[#00a82d] px-3.5 py-2.5 text-center text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            :class="disableButton ? 'opacity-50' : ''"
            >Отправить заявку</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {mapState, mapMutations} from 'vuex'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import Input from '@/components/ui/inputs/default.vue'
import Select from '@/components/ui/select.vue'
import Phone from '@/components/ui/inputs/phone.vue'
export default {
  name: 'Contacts',
  computed: {
    ...mapState({
      tiers: state => state.tiers,
      form: state => state.form
    })
  },
  components: {
    EnvelopeIcon, PhoneIcon,
    Input,
    Select,
    Phone
  },
  data() {
    return {
      disableButton: true
    }
  },
  methods: {
    ...mapMutations({
      change_state: 'CHANGE_STATE'
    }),
    async sendApplication() {
      this.disableButton = true
        try {
          await axios.post('https://livo.tj/home/feedback', this.form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          let form = {
            key: 'form',
            body: {
                fullname: '',
                phone: '',
                service: 'Оптимальный'
              }
            }
            this.change_state(form)
            let payload = {
              key: 'alert',
              body: {
                isActive: true
              }
            }
            this.change_state(payload)
            setInterval(() => {
              let payload = {
                key: 'alert',
                body: {
                  isActive: false
                }
              }
            this.change_state(payload)
            }, 2000)
        } catch(err) {
          console.log(err);
        }
    },
  },
  watch: {
    form: {
      handler(val) {
        if(Object.values(val).filter(f => f == '').length) {
          this.disableButton = true
        } else this.disableButton = false
      },
      deep: true
    }
  },
}
</script>