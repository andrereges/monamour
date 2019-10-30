<template>
<q-layout view="lHr Lpr lfr">
    <filtro></filtro>
    <carrossel></carrossel>
    <q-page-container>
        <card></card>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1
    }
  }
}
</script>
