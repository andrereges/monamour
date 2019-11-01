<template>
<q-layout view="lHr Lpr lfr">
    <q-page-container>
      <thumbnails />
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Teste</div>
          {{ descricao }}
        </q-card-section>
      </q-card>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">

      <q-list>
        <div class="text-h6" align="center">Especialidades</div>
        <q-item>
          <q-item-section avatar>
            <q-icon color="red" name="local_gas_station" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Gas Station</q-item-label>
            <q-item-label caption>Fill your gas tank.</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <q-card class="my-card">

      <q-card-actions align="around">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <q-rating size="24px" v-model="stars" :max="5" />
      </q-card-section>
    </q-card>
  </div>
      <video-slide />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PagePerfil',
  data () {
    return {
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
