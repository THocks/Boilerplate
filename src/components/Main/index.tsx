import * as S from './styles'

const Main = ({
  title = 'React Avançando',
  description = 'TypeScript,ReactJs,NextJs e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/react-logo.png"
      alt="Imagem de um átomo representando icon do react."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/herroIlustration.webp"
      alt="Imagem desenvolvedor digitando no computador"
    />
  </S.Wrapper>
)

export default Main
