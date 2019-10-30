<template>
    <div class="q-pa-md doc-container">
        <div class="row">
            <div class="col-md-4 q-pa-sm" v-for="(req, index) in 12" :key="index">
                <q-card>
                <q-img src="#">
                    <div class="absolute-bottom">
                    <div class="text-h6">Camila Dior</div>
                    <div class="text-subtitle2">Jardins - São Paulo</div>
                    </div>
                </q-img>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
