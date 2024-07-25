import IconPhone from '../../image/Phone.png'
import logo from '../../image/Logo.png'
import * as S from './styled'
import { Container } from '../../style/global'

const Hero = () => (
  <>
    <S.MainHero>
      <S.Imagem src={IconPhone} alt="Logo" />
      <S.Titulo>
        <h1>CATÁLOGO</h1>
        <h2>TELEFÓNICO</h2>
      </S.Titulo>
    </S.MainHero>
    <S.Logo>
      <Container>
        <S.Imagem src={logo} alt="Logo" />
      </Container>
    </S.Logo>
  </>
)

export default Hero
