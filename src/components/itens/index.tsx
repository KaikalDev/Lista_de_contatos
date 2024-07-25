import * as S from './styled'
import * as enums from '../../utils/enums/status'
import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  AlteraParaEditando,
  AlteraStatus,
  Editando
} from '../../store/reducers/contatos'
import { Botao, Icon } from '../../style/global'
import Add from '../../image/add_circle_black.png'

type Props = {
  Nome: string
  Numero: string
  Email: string
  checked: 'checked' | 'unchecked'
  id: number
  estaEditando: boolean
}

const Contato = ({ Nome, Email, Numero, checked, id, estaEditando }: Props) => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState(Nome)
  const [email, setEmail] = useState(Email)
  const [numero, setNumero] = useState(Numero)

  function Altera(e: ChangeEvent<HTMLInputElement>) {
    dispatch(AlteraStatus({ id, finalizado: e.target.checked }))
  }

  return (
    <S.Item>
      <S.Tags>
        {estaEditando ? (
          <Botao
            onClick={() => {
              dispatch(
                Editando({ checked, email, estaEditando, id, nome, numero })
              )
              dispatch(AlteraParaEditando())
            }}
          >
            <Icon src={Add} alt="Add" />
          </Botao>
        ) : (
          <S.CheckboxItem
            onChange={Altera}
            checked={checked === enums.Status.CHECKED}
            type="checkbox"
          />
        )}
      </S.Tags>
      <S.Tags>
        <S.inputInf
          onChange={(e) => setNome(e.target.value)}
          disabled={!estaEditando}
          type="text"
          value={nome}
        />
      </S.Tags>
      <S.Tags>
        <S.inputInf
          onChange={(e) => setNumero(e.target.value)}
          disabled={!estaEditando}
          type="text"
          value={numero}
        />
      </S.Tags>
      <S.Tags>
        <S.inputInf
          onChange={(e) => setEmail(e.target.value)}
          disabled={!estaEditando}
          type="email"
          value={email}
        />
      </S.Tags>
    </S.Item>
  )
}

export default Contato
