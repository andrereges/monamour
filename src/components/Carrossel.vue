<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="#" />
      <q-carousel-slide :name="2" img-src="#" />
      <q-carousel-slide :name="3" img-src="#" />
      <q-carousel-slide :name="4" img-src="#" />
    </q-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>
