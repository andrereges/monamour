<template>
  <div class="q-pa-md q-gutter-sm">
    <q-carousel
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide name="soft-jazz">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/k3_tw44QsZQ"
        />
      </q-carousel-slide>

      <q-carousel-slide name="mc">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/MXQ8ehy8wRg"
        />
      </q-carousel-slide>

      <q-carousel-slide name="chill-mix">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/rQLhZlI6aTM"
        />
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 'Soft Jazz', value: 'soft-jazz' },
          { label: 'MC Nando e MC Luanzinho', value: 'mc' },
          { label: 'Chill Mix', value: 'chill-mix' }
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 'mc'
    }
  }
}
</script>
