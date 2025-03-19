import styled from "styled-components"
import ItemNavegacao from "./item-navigate/item-de-navegacao"

const ListaEstilizada = styled.ul`
    list-style-type: none;
    padding: 0;
    margin:0;
    width:212px;
    a{
        text-decoration:none;
    }
`


const BarraLateral = ()=>{
    return(
        <>
            <aside>
                <nav>
                    <ListaEstilizada>
                        <ItemNavegacao iconeAtivo="/icones/home-ativo.png" iconeInativo="/icones/home-iinativo.png" ativo={true}>
                            Inicio
                        </ItemNavegacao>
                        <ItemNavegacao iconeAtivo="/icones/home-ativo.png" iconeInativo="/icones/home-iinativo.png" ativo={true}>
                            Mais vistas
                        </ItemNavegacao>
                    </ListaEstilizada>
                </nav>
            </aside>        
        </>
    )
}

export default BarraLateral