import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Mono", monospace;
    list-style: none;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 25px;
  width: 25px;
  border-radius: 20%;
  border: 3px solid #fff;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;

  &:checked {
    background-color: #2196f3;
    border-color: #fff;
  }
`
export const Icon = styled.img`
  height: 27px;
`
export const Botao = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default EstiloGlobal
