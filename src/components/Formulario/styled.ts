import styled from 'styled-components'

export const HFroms = styled.form`
  display: grid;
  grid-template-columns: 1fr 5fr 5fr 5fr;
  gap: 32px;
  margin-top: 24px;
`
export const FormItem = styled.div`
  background-color: #193b70;
  padding: 8px;
  color: #fff;
  align-items: center;
  display: flex;
  gap: 12px;

  h1 {
    font-size: 22px;
  }

  &:first-child {
    justify-content: center;
  }
`

export const FormInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px #fff solid;
  color: #fff;

  &:focus {
    background-color: #ffffff1c;
    border: none;
    outline: none;
    border-bottom: 2px #fff solid;
  }
`
