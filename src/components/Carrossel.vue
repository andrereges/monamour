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
      <q-carousel-slide :name="1" img-src="https://images6.alphacoders.com/414/414536.jpg" />
      <q-carousel-slide :name="2" img-src="https://images8.alphacoders.com/414/414539.jpg" />
      <q-carousel-slide :name="3" img-src="https://images8.alphacoders.com/414/414541.jpg" />
      <q-carousel-slide :name="4" img-src="https://images6.alphacoders.com/414/414542.jpg" />
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
