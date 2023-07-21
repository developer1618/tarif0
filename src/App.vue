<template>
  <section class="relative">
    <Header/>
    <Slide/>
    <Price/>
    <Partner/>
    <Contact/>
    <Footer/>
    <transition name="home">
      <Alert v-if="alert.isActive"/>
    </transition>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import Slide from '@/components/slide'
import Price from '@/components/price'
import Partner from '@/components/partner'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Alert from '@/components/ui/alert.vue'
export default {
  name: 'App',
  components: {
    Slide,
    Price,
    Partner,
    Contact,
    Footer,
    Header,
    Alert
  },
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  }
}
</script>
<style>
.main__container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
