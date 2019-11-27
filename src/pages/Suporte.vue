<template>
  <q-layout view="lHr Lpr lfr">
    <q-page-container align="center">
      <h4>Suporte</h4>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
      <q-select
          filled
          v-model="model"
          :options="options"
          label="Assunto"
          emit-value
          map-options
        />
      <q-editor v-model="editor" min-height="5rem" />
      <div align="right">
        <q-btn label="Enviar" type="submit" color="primary" align="right"/>
        <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" align="right"/>
      </div>
    </q-form>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PageSuporte',
  data () {
    return {
      model: 'elogio',
      editor: '',
      options: [
        {
          label: 'Elogio',
          value: 'elogio'
        },
        {
          label: 'Dúvida',
          value: 'duvida'
        },
        {
          label: 'Reclamação',
          value: 'reclamacao'
        },
        {
          label: 'Sugestão',
          value: 'sugestao'
        },
        {
          label: 'Outros',
          value: 'outros'
        }
      ]
    }
  }
}
</script>
