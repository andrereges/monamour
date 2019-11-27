<template>
  <q-layout view="lHr Lpr lfr" align="center">
    <filtro></filtro>
    <carrossel></carrossel>
    <h6>Rua de Cima</h6>
    <q-separator color="orange" inset />
    <imagem></imagem>
    <h6>Rua do Meio</h6>
    <q-separator color="orange" inset />
    <imagem></imagem>
    <h6>Rua de Baixo</h6>
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
