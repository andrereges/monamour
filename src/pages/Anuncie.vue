<template>
<q-layout view="lHr Lpr lfr">
    <q-page-container align="center">
      <div class="text-h4">Anuncie</div>
      <div class="q-pa-md" style="max-width: 600px" align="center">
        <div class="q-gutter-sm q-pa-md">
          <q-radio v-model="genero" val="H" label="H" />
          <q-radio v-model="genero" val="M" label="M" />
          <q-radio v-model="genero" val="T" label="T" />
        </div>
        <q-input
          filled
          v-model="nome"
          label="Nome Artístico*"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
        />
        <q-date v-model="date" minimal />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PageAnuncie',
  data () {
    return {
      genero: 'H',
      nome: '',
      date: ''
    }
  }
}
</script>
