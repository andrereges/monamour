<template>
    <div class="q-pa-md doc-container">
        <div class="row">
            <div class="q-pa-sm shadow-4 col-md-4 col-lg-4 col-sm-6 col-xs-12" v-for="(req, index) in 12" :key="index">
              <router-link v-bind:to="'/perfil'" tag='a' class='primary'>
                <div class="col-6">
                  <q-img class="imagem" src="http://www.liberaldictionary.com/wp-content/uploads/2019/02/h-d-5602.jpg">
                    <div class="absolute-bottom-right text-subtitle2">
                        <div class="text-h6" align="center">Soldado Infernal</div>
                        <div class="text-subtitle2" align="center">Vingadores - Marvel</div>
                    </div>
                  </q-img>
                </div>
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
