<template>
  <q-layout view="lHr Lpr lfr">
    <q-card-section align="center">
      <div class="text-h4">Login</div>
      <q-separator vertical inset class="q-mx-lg" />
      <div class="row justify-center text-center q-pa-md" style="max-width: 400px;">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="whatspp"
            label="WhatsApp *"
            mask="(##) #########"
            :rules="[val => val.length >= 13 || 'Quantidade de números inválido, mínimo 10 números']"
            lazy-rules
          />
          <q-input
            filled
            :type="veSenha ? 'password' : 'text'"
            v-model="senha"
            label="Senha *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
          >
          <template v-slot:append>
                <q-icon
                  :name="veSenha ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="veSenha = !veSenha"
                />
              </template>
          </q-input>
          <div>
            <q-btn class="col" style="width:100%" label="Entrar" type="submit" color="purple"/>
          </div>
          <div class="row">
            <div class="col-md-6">
              <q-btn label="Esqueceu a senha?" to="/recupera-senha" color="purple" flat />
            </div>
            <div class="col-md-6 text-right">
              <q-btn label="Cadastre-se" to="/anuncie" flat color="purple" class="q-ml-sm" />
            </div>
          </div>
        </q-form>
      </div>
    </q-card-section>
  </q-layout>
</template>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      whatsapp: '',
      senha: '',
      veSenha: true
    }
  }
}
</script>
