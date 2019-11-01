<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner rounded class="bg-purple-3 text-white">

      <div class="q-gutter-sm">
        <q-select
          filled
          v-model="model"
          :options="options"
          label="Estado"
          emit-value
          map-options
        />
        <q-radio keep-color v-model="color" val="orange" label="Opção 1" color="orange" />
        <q-radio keep-color v-model="color" val="red" label="Opção 2" color="red" />
        <q-radio keep-color v-model="color" val="teal" label="Opção 3" color="teal" />
        <q-icon align="center" name="img:https://cdn.icon-icons.com/icons2/54/PNG/256/seek_search_find_10833.png" style="font-size: 4.4em;" />
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
