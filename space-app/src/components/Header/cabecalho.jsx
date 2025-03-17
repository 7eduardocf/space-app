import styled from "styled-components"
import CampoDeTextoEstilizado from "../field-text/campo-de-texto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display : flex;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
`

const Cabecalho = () =>{
    return (
        <HeaderEstilizado>
            <img src="imagens/logo.png" alt="Imagem de logo"/>
            <CampoDeTextoEstilizado/>
        </HeaderEstilizado>
    )
}

export default Cabecalho