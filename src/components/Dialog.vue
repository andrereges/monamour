<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Confirm" color="primary" @click="confirm = true" />
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm">
            <pre>
                Para navegar nesta categoria você deve aceitar os seguintes termos:

                1. Tenho mais de 18 anos.

                2. Entendo que haverá conteúdo explícito nesta página destinada a adultos.

                3. Este conteúdo não irá causar problemas ou incômodos a minha pessoa.

                4. Clicando em "Concordo" abaixo, eu concordo que os provedores de Internet, proprietários e fundadores do Vivalocal não se encarregam da responsabilidade sobre este conteúdo e o uso do mesmo nesta categoria de adultos.
            </pre>
        </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Não concordo" color="negative" v-close-popup />
          <q-btn flat label="Eu concordo" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      confirm: false
    }
  }
}
</script>
