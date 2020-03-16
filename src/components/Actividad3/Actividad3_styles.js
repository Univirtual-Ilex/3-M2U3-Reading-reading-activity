import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`

       
.contenedorButton{
    text-align:right;
    padding-right:3em;
}

li{
    margin:0.5em 0;
}

.baseWord {
    color: ${Ilex.color_gris};
    text-align: center;
    font-size: 1.1em;
    padding: 0.6em 0;
}

.wordsContainer {
    text-align: center
}

`
export const Olist = styled.ol`
    color:${Ilex.textos};
    text-align:center;
    list-style:none;
    counter-reset:contador;

`

export const Item = styled.li`
    font-weight:normal;
    counter-increment:contador;
    padding:0;
    margin:0.2em 0;
    &::before{
        content:counter(contador)')';
        font-weight:bold;
        margin-right:0.75em;
    }
`


export default styles
    