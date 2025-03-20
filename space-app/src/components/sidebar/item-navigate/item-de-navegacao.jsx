import styled from "styled-components"

const ListaEstilizada = styled.li`
    font-size: 24px;
    line-height:29px;
    margin-bottom: 30px;
    cursor: pointer;
    color:${props=> props.ativo ? "#7B78E5" : "#D9D9D9"};
    font-family:${props=> props.ativo ? "GandhiSansBold" : "GandhiSansRegular"};
    display: flex;
    gap: 22px;
    align-items: center;

`

const ItemNavegacao = ({children,iconeAtivo,iconeInativo,ativo=false})=>{
    return(<ListaEstilizada $ativo={ativo}>
            <img src={ativo?iconeAtivo:iconeInativo} alt="Icone"/>
            {children}
        </ListaEstilizada>
    )
}
export default ItemNavegacao