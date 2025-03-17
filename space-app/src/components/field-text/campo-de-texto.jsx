import styled from "styled-components"

const ContainerInput = styled.div`
    display	: inline-block;
    position: relative;
`

const CampoDeTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`
const ImagemDeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoDeTexto = (props)=>{
    return(
        <ContainerInput>
            <CampoDeTextoEstilizado placeholder="O que voce procura" {...props}/>
            <ImagemDeLupa src="lupa.svg" alt="Icone de lupa"/>
        </ContainerInput>
    )
}

export default CampoDeTexto