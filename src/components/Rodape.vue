<template>
    <q-footer  elevated class="bg-grey-8 text-white">
      <q-toolbar>
        &copy; 2019 | Monamour Acompanhantes
        <q-item clickable tag="a" target="_blank" href="https://www.facebook.com">
          <q-item-section avatar>
            <img src="~assets/icons/facebook.png">
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-footer>
</template>

<script>
export default {
  name: 'Rodape',

  data () {
    return {
      right: false
    }
  }
}
</script>
