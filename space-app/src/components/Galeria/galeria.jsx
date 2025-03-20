import styled from "styled-components"
import Titulo from "../titles/titulos"
import Tags from "./Tags/tags"
import Populares from "./Populares/populares"

const GaleriaContainer = styled.div`
    display: flex;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = () =>{
    return(
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>

                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}

export default Galeria