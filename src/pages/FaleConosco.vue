<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <h5 align="center">Fale Conosco</h5>

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
        <q-card flat bordered>
          <q-card-section>
            <pre style="white-space: pre-line">{{ editor }}</pre>
          </q-card-section>
        </q-card>
        <q-card flat bordered>
        <q-card-section v-html="editor" />
    </q-card>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFaleConosco',
  data () {
    return {
      model: 'elogio',
      editor: 'What you see is <b>what</b> you get.',
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
