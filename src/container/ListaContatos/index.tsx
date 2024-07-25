import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/itens'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)

  return (
    <ul>
      {itens.map((t) => (
        <li key={t.id}>
          <Contato
            id={t.id}
            checked={t.checked}
            Email={t.email}
            Nome={t.nome}
            Numero={t.numero}
            estaEditando={t.estaEditando}
          />
        </li>
      ))}
    </ul>
  )
}

export default ListaContatos
