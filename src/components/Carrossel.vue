<template>
  <div class="q-pa-md imagem">
    <router-link v-bind:to="'/perfil'" tag='a' class='primary'>
      <q-carousel
        animated
        height="400px"
        v-model="slide"
        infinite
        autoplay
        transition-prev="slide-right"
        transition-next="slide-left"
        class="q-pa-sm shadow-4 col-md-4 col-lg-4 col-sm-6 col-xs-12 scale"
      >
        <q-carousel-slide :name="1" img-src="https://images6.alphacoders.com/414/414536.jpg">
          <div class="absolute-bottom-right text-subtitle2" style="color:purple; padding: 32px">
            <div class="text-h5" >Soldado Infernal</div>
            <div class="text-subtitle2">Vingadores - Marvel</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="https://images8.alphacoders.com/414/414539.jpg">
          <div class="absolute-bottom-right text-subtitle2" style="color:purple; padding: 32px">
            <div class="text-h5" align="center">Soldado Infernal</div>
            <div class="text-subtitle2" align="center">Vingadores - Marvel</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </router-link>
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
