import styled from "styled-components"
import EstilosGlobais from "./components/global-styles/global-styles"
import Cabecalho from "./components/Header/cabecalho"
import BarraLateral from "./components/sidebar/barra-lateral"

const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height:100vh;
`

function App() {

  return (
    <FundoGradiente>
        <EstilosGlobais/>
        <Cabecalho/>
        <BarraLateral/>
    </ FundoGradiente>
  )
}

export default App
