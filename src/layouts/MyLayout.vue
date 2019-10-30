<template>
  <q-layout view="lHr Lpr lfr">
    <cabecalho></cabecalho>
    <q-page-container>
      <router-view />
    </q-page-container>
    <rodape></rodape>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      right: false
    }
  }
}
</script>
