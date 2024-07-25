import styled from 'styled-components'
import { Checkbox } from '../../style/global'

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 5fr 5fr;
  gap: 32px;
  margin-top: 24px;
`
export const Tags = styled.div`
  background-color: #cdd6ff;
  padding: 8px;
  color: #000;
  align-items: center;
  display: flex;

  h1 {
    font-size: 18px;
  }

  &:first-child {
    justify-content: center;
  }
`
export const checkbox = styled.input`
  border-radius: 15px;
  height: 100%;
  width: 50%;
  text-align: center;
  cursor: pointer;
`

export const CheckboxItem = styled(Checkbox)`
  border-color: #000;

  &:checked {
    background-color: #2196f3;
    border-color: #000;
  }
`
export const inputInf = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 16px;

  &:disabled {
    color: #000;
  }
`
