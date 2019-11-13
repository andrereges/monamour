<template>
<q-layout view="lHr Lpr lfr">
    <q-page-container>
      <q-card-section align="center">
        <div class="text-h4">Login</div>
        <q-separator vertical inset class="q-mx-lg" />
        <div class="q-pa-md" style="max-width: 400px">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="usuario"
              label="Usuário*"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            />
            <q-input
              filled
              type="password"
              v-model="senha"
              label="Senha*"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            />
            <div>
              <q-btn label="Esqueci a senha" type="submit" color="purple" flat class="q-ml-sm" />
              <q-btn label="Entrar" type="submit" color="primary"/>
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      usuario: '',
      senha: ''
    }
  }
}
</script>
