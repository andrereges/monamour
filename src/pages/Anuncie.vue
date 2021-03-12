<template>
  <q-layout view="lHr Lpr lfr" align="center">
    <h4>Cadastro - Informações Básicas</h4>
    <div style="max-width: 600px">
      <q-form class="q-gutter-md">
        <div class="q-gutter-sm" align="left">
          <q-radio v-model="genero" val="H" label="Homem" />
          <q-radio v-model="genero" val="M" label="Mulher" />
          <q-radio v-model="genero" val="T" label="Transsexual" />
        </div>
        <q-input
          filled
          v-model="nome"
          hint="Dica: Não use nome verdadeiro"
          label="Nome Artístico *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
        />
        <template>
        <q-input
          filled
          label="Data de Nascimento *"
          v-model="dataNascimento"
          type="date"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
        />
        </template>
        <q-select
          filled
          v-model="estado"
          :options="estadoOpcoes"
          label="Estado"
          emit-value
          map-options
        />
        <q-select
          filled
          v-model="municipio"
          :options="municipioOpcoes"
          label="Município"
          emit-value
          map-options
        />
        <q-input
          filled
          v-model="whatsapp"
          hint="Importante: O número será seu LOGIN"
          label="WhatsApp *"
          mask="(##) #########"
          :rules="[val => val.length >= 13 || 'Quantidade de números inválido, mínimo 10 números']"
        />
        <q-input
          filled
          v-model="senha"
          hint="Dica: Mínimo 6 carateres, entre letras, números e caracteres especiais"
          :type="veSenha ? 'password' : 'text'"
          label="Senha *"
          :rules="[ val => val.length >= 6 || 'A senha deve conter no mínimo 6 carateres']"
          >
            <template v-slot:append>
              <q-icon
                :name="veSenha ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="veSenha = !veSenha"
              />
            </template>
        </q-input>
        <div class="row">
          <div class="col-md-6 text-left">
            <q-btn label="Voltar" color="purple" flat class="q-ml-sm" />
          </div>
          <div class="col-md-6 text-right">
            <q-btn label="Avançar" flat color="purple" class="q-ml-sm" />
          </div>
        </div>
      </q-form>
    </div>
  </q-layout>
</template>

<script>
import Constants from '../../constants'

export default {
  name: 'PageAnuncie',
  data () {
    return {
      genero: 'H',
      nome: '',
      dataNascimento: new Date(),
      senha: '',
      veSenha: true,
      whatsapp: '',
      estado: '',
      estadoOpcoes: [],
      municipio: '',
      municipioOpcoes: []
    }
  },
  created () {
    this.$axios.get(Constants.apiIbgeEstados)
      .then(resp => {
        resp.data.forEach(element => {
          this.estadoOpcoes.push({ value: element.id, label: element.nome })
        })
      }).catch(erro => console.log(erro))
    this.$axios.get(Constants.apiIbgeMunicipios)
      .then(resp => {
        resp.data.forEach(element => {
          this.municipioOpcoes.push({ value: element.id, label: element.nome })
        })
      }).catch(erro => console.log(erro))
  },
  methods: {
    // carregaMunicipios (uf) {
    //   this.$axios.get(Constants.apiIbgeMunicipios)
    //     .then(resp => {
    //       resp.data.forEach(element => {
    //         this.municipioOpcoes.push({ value: element.id, label: element.nome })
    //       })
    //     }).catch(erro => console.log(erro))
    // }
  }
}
</script>
