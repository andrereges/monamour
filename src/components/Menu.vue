<template>
    <div class="q-pa-md" align="right">
        <q-btn color="purple" label="Configurações da Conta">
        <q-menu :showMenu="showMenu">
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
                <img src="https://cdn.quasar.dev/img/avatar4.jpg">
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
        </q-btn>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      showMenu: true
    }
  }
}
</script>
