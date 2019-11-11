<template>
    <q-header elevated class="bg-accent text-white shadow-box" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Monamour
        </q-toolbar-title>
        <div class="q-pa-md" align="right">
        <q-btn dense flat round icon="menu" @click="showMenu = !showMenu" class="q-mr-sm" />
        <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                  <div class="text-h6 q-mb-md">Configurações</div>
                  <q-list>
                      <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
                      <q-item-section avatar>
                          <q-icon name="school" />
                      </q-item-section>
                      <q-item-section>
                          <q-item-label>Dados Pessoais</q-item-label>
                      </q-item-section>
                      </q-item>
                  </q-list>
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                  <q-avatar size="72px">
                  <img src="~assets/foto_perfil/andre_2.jpg">
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                  <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                  />
              </div>
            </div>
        </q-menu>
      </div>
      </q-toolbar>
      <q-tabs align="center">
        <q-route-tab to="/" label="Início" />
        <q-route-tab to="/anuncie" label="Anuncie" />
        <q-route-tab to="/area-vip" label="Área Vip" />
        <q-route-tab to="/fale-conosco" label="Fale Conosco" />
      </q-tabs>
    </q-header>
</template>

<script>
export default {
  name: 'Cabecalho',
  data () {
    return {}
  }
}
</script>
