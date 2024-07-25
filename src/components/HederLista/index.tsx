import { ChangeEvent, useState } from 'react'
import { Checkbox } from '../../style/global'
import * as S from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { AlteraStatus } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'

export const HederLista = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contato)
  const [check, setCheck] = useState(false)

  function Altera(e: ChangeEvent<HTMLInputElement>) {
    itens.forEach((item) => {
      const id = item.id
      dispatch(AlteraStatus({ id, finalizado: e.target.checked }))
    })
    setCheck(!check)
  }

  return (
    <S.HLista>
      <S.ItemHeder>
        <Checkbox onChange={Altera} checked={check} type="checkbox" />
      </S.ItemHeder>
      <S.ItemHeder>
        <h1>Nome: </h1>
      </S.ItemHeder>
      <S.ItemHeder>
        <h1>Telefone: </h1>
      </S.ItemHeder>
      <S.ItemHeder>
        <h1>Email: </h1>
      </S.ItemHeder>
    </S.HLista>
  )
}
