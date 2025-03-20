import styled from "styled-components";
import banner from "/banner.png"

const BannerEstilizado = styled.div`
    background-image: url(${banner});
    width: 1204px;
    height: 328px;
    align-items:center;
    display:flex;
    border-radius: 16px;
    background-size:cover;
    p{
        font-family: "GandhiSansBold";
        font-size: 40px;
        width:301px;
        margin-left:64px;
        color: #FFFFFF;
    }
`
const Banner = () =>{
    return(
        <BannerEstilizado>
            <p>A galeria mais completa de fotos do espaço!</p>
        </BannerEstilizado>
    )
}

export default Banner