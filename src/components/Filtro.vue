<template>
  <div class="q-pa-md">
    <q-banner rounded class="bg-purple-3 text-white">
      <div class="q-gutter-sm">
        <!-- <q-select
          filled
          v-model="model"
          :options="options"
          label="Estado"
          emit-value
          map-options
        />
        <q-radio keep-color v-model="color" val="teal" label="Homem" color="teal" />
        <q-radio keep-color v-model="color" val="red" label="Mulher" color="red" />
        <q-radio keep-color v-model="color" val="orange" label="Transsexual" color="orange" /> -->
      </div>
    </q-banner>
  </div>
</template>

<script>
export default {
  name: 'Filtro',

  data () {
    return {
      color: 'orange',
      model: 'SP',
      options: [
        {
          label: 'São Paulo',
          value: 'SP'
        },
        {
          label: 'Rio de Janeiro',
          value: 'RJ'
        }
      ]
    }
  }
}
</script>
