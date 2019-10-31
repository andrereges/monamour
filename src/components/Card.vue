<template>
    <div class="q-pa-md doc-container">
        <div class="row">
            <div class="col-md-4 q-pa-sm shadow-4" v-for="(req, index) in 12" :key="index">
              <router-link v-bind:to="'/perfil'" tag='a' class='primary'>
                <q-card class="card" @click="alerta(req)">
                  <q-img src="http://www.liberaldictionary.com/wp-content/uploads/2019/02/h-d-5602.jpg">
                      <div class="absolute-bottom">
                      <div class="text-h6">Soldado Infernal</div>
                      <div class="text-subtitle2">Vingadores - Marvel</div>
                      </div>
                  </q-img>
                </q-card>
              </router-link>
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
  },
  methods: {
    alerta: (req) => console.log(req)
  }
}
</script>
