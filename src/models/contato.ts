class Contato {
  nome: string
  numero: string
  email: string
  id: number
  checked: 'checked' | 'unchecked'
  estaEditando: boolean

  constructor(
    nome: string,
    numero: string,
    email: string,
    id: number,
    checked: 'checked' | 'unchecked',
    estaEditando: boolean
  ) {
    this.email = email
    this.nome = nome
    this.numero = numero
    this.id = id
    this.checked = checked
    this.estaEditando = estaEditando
  }
}

export default Contato
