import Add from '../../image/add_circle.png'
import Excluir from '../../image/Trash 2.png'
import Editar from '../../image/Edit.png'
import * as S from './styled'
import { Botao, Icon } from '../../style/global'
import Formulario from '../../components/Formulario'
import { HederLista } from '../../components/HederLista'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AlteraParaEditando, remover } from '../../store/reducers/contatos'

const Heder = () => {
  const [estaAdd, setEstaAdd] = useState(false)
  const dispatch = useDispatch()

  const FormularioSubmit = () => {
    setEstaAdd(false)
  }

  return (
    <>
      <S.HederDiv>
        <h1>Contatos</h1>
        <S.Botoes>
          <li>
            <Botao onClick={() => setEstaAdd(!estaAdd)}>
              <Icon src={Add} alt="Add" />
            </Botao>
          </li>
          <li>
            <Botao onClick={() => dispatch(remover())}>
              <Icon src={Excluir} alt="Excluir" />
            </Botao>
          </li>
          <li>
            <Botao onClick={() => dispatch(AlteraParaEditando())}>
              <Icon src={Editar} alt="Editar" />
            </Botao>
          </li>
        </S.Botoes>
      </S.HederDiv>
      {estaAdd ? <Formulario onSubmit={FormularioSubmit} /> : <HederLista />}
    </>
  )
}

export default Heder
