import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contato'
import * as enums from '../../utils/enums/status'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      checked: enums.Status.UNCHECKED,
      nome: 'Kaique',
      email: 'kaiquesimoes@gmail.com',
      numero: '(00) 0 0000-0000',
      id: 1,
      estaEditando: false
    }
  ]
}

const ContatoSlice = createSlice({
  name: 'Contato',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExiste) {
        alert('Contato já cadastrado!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    },
    AlteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].checked = action.payload.finalizado
          ? enums.Status.CHECKED
          : enums.Status.UNCHECKED
      }
    },
    remover: (state) => {
      state.itens = [
        ...state.itens.filter((t) => t.checked !== enums.Status.CHECKED)
      ]
    },
    AlteraParaEditando: (state) => {
      let teste = true
      state.itens.forEach((t) => {
        if (t.estaEditando) {
          t.estaEditando = false
          teste = false
        }
        if (t.checked === enums.Status.CHECKED) {
          t.estaEditando = true
          t.checked = enums.Status.UNCHECKED
          teste = false
        }
      })
      if (teste) {
        alert('Nem um item selecionado')
      }
    },
    Editando: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const {
  cadastrar,
  AlteraStatus,
  remover,
  AlteraParaEditando,
  Editando
} = ContatoSlice.actions
export default ContatoSlice.reducer
