<template>
<q-layout view="lHr Lpr lfr">
    <q-page-container>
      <thumbnails />
      <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>
          <q-btn aling="left" flat round color="red" icon="favorite" />
          <q-btn aling="right" flat round color="primary" icon="share" />
        </q-card-section>
        <q-card-section>
          <div class="text-h5" align="center">Apresentação</div>
          {{ descricao }}
        </q-card-section>
          <q-list>
          <div class="text-h5" align="center">Especialidades</div>
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
