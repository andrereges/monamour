<template>
  <q-layout view="lHr Lpr lfr">
    <thumbnails />
    <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-avatar size="35px">
                <img src="~assets/icons/whatsapp.svg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h5">(11) 98647-5621</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-btn aling="left" flat round color="red" icon="favorite" />
        <q-btn aling="right" flat round color="primary" icon="share" />
      </q-card-section>
      <q-card-section>
        <h5 align="center">Apresentação</h5>
        {{ descricao }}
      </q-card-section>
        <q-list>
          <h5 align="center">Especialidades</h5>
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
