import styled from "styled-components"
import EstilosGlobais from "./components/global-styles/global-styles"
import Cabecalho from "./components/Header/cabecalho"
import BarraLateral from "./components/sidebar/barra-lateral"
import Banner from "./components/banner/banner"
import Galeria from "./components/Galeria/galeria"

const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height:100vh;
`
const AppContainer = styled.section`
    width: 1440px;
    max-width:100%;
    margin: 0 auto;
`
const MainContainer = styled.main`
    display: flex;
    gap: 24px;
    justify-content: space-between;
`
const ConteudoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow:1;
`


function App() {

  return (
    <FundoGradiente>
        <EstilosGlobais/>
        <AppContainer>
            <Cabecalho/>
            <MainContainer>
                <BarraLateral/>
                <ConteudoGaleria>
                    <Banner/>
                    <Galeria/>
                </ConteudoGaleria>
            </MainContainer>
        </AppContainer>
    </ FundoGradiente>
  )
}

export default App
