import styled from 'styled-components'

export const MainHero = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
  background-color: #193b70;
`

export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  h2 {
    font-family: 'Volkhov', serif;
    font-size: 50px;
    margin-left: 40px;
  }
  h1 {
    font-family: 'Volkhov', serif;
    font-size: 50px;
  }
`

export const Imagem = styled.img`
  height: 100px;
  color: #fff;
`

export const Logo = styled.nav`
  background-color: #d9d9d9;
  height: 80px;

  img {
    height: 80px;
  }
`
