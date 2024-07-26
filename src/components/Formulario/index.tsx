import * as S from './styled'
import Add from '../../image/add_circle.png'
import { Botao, Icon } from '../../style/global'
import { useDispatch } from 'react-redux'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { cadastrar } from '../../store/reducers/contatos'
import * as enums from '../../utils/enums/status'
import Inputmask from 'inputmask'

const Formulario = ({ onSubmit }: { onSubmit: () => void }) => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const TelefoneRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (TelefoneRef.current) {
      const mask = new Inputmask('(99) 9 9999-9999')
      mask.mask(TelefoneRef.current)
    }
  })

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      cadastrar({
        nome: nome,
        numero: telefone,
        email: email,
        checked: enums.Status.UNCHECKED,
        estaEditando: false
      })
    )

    onSubmit()
  }

  return (
    <S.HFroms onSubmit={cadastrarContato}>
      <S.FormItem>
        <Botao type="submit">
          <Icon src={Add} alt="Add" />
        </Botao>
      </S.FormItem>
      <S.FormItem>
        <label htmlFor="nome">Nome: </label>
        <S.FormInput
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          name="nome"
          type="text"
          required
        />
      </S.FormItem>
      <S.FormItem>
        <label htmlFor="Telefone">Telefone: </label>
        <S.FormInput
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          name="Telefone"
          type="text"
          ref={TelefoneRef}
          required
        />
      </S.FormItem>
      <S.FormItem>
        <label htmlFor="Email">Email: </label>
        <S.FormInput
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          name="Email"
          type="email"
          required
        />
      </S.FormItem>
    </S.HFroms>
  )
}
export default Formulario
