<template>
<q-layout view="lHr Lpr lfr">
    <filtro></filtro>
    <carrossel></carrossel>
    <q-separator color="orange" inset />
    <imagem></imagem>
    <dialog></dialog>
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
