<template>
    <q-header elevated class="bg-accent text-white shadow-box" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Monamour
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="showMenu = !showMenu" />
      </q-toolbar>
      <q-tabs align="center">
        <q-route-tab to="/" label="Início" />
        <q-route-tab to="/anuncie" label="Anuncie" />
        <q-route-tab to="/area-vip" label="Área Vip" />
        <q-route-tab to="/fale-conosco" label="Fale Conosco" />
      </q-tabs>
      <menu></menu>
    </q-header>
</template>

<script>
export default {
  name: 'Cabecalho',

  data () {
    return {
      showMenu: false
    }
  }
}
</script>
