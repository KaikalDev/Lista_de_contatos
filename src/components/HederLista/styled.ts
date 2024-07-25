import styled from 'styled-components'

export const HLista = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 5fr 5fr;
  gap: 32px;
  margin-top: 24px;
`
export const ItemHeder = styled.div`
  background-color: #193b70;
  padding: 8px;
  color: #fff;
  align-items: center;
  display: flex;
  height: 48px;

  h1 {
    font-size: 22px;
  }

  &:first-child {
    justify-content: center;
  }
`
