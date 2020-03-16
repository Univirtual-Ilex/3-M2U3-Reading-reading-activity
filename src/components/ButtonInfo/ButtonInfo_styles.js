import { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
display: inline-block;
button{
    background-color: ${Ilex.violeta2};
    display: flex;
    align-items: center;
    font-family: ${Ilex.titulos};
    font-weight: bold;
    font-size: 0.7em;
    padding: 1em;
    border-radius:0.8em;
    box-shadow: 0 0.8em 0 0 rgba(0,0,0,0.2);
    max-width: 19em;
    cursor: pointer;
    transition: background  0.3s ease-in-out;
    &:hover{
        background-color: ${Ilex.morado}
    }
    span {
        color: #fff;
        display: inline-block;
        margin-right: 1em;
        img{
            width: 2em;
            height: 2em;
        }
    }
}
`

export default styles
    