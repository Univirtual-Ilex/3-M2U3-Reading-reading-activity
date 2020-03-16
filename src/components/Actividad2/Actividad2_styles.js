import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    .inline_list{
        color:${Ilex.textos};
        font-family: ${Ilex.font};
    }

    .drag{
        background: ${Ilex.violeta2};
        color: white;
        border-radius: 0.5em;
        height: 2em;
        width: 10.3em;
        cursor: pointer;
        text-align: center;
    }
`
export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    position:absolute;
    right:${props => props.right || '1.6' }em;
    top:${props => props.top || '1' }em;

`

export default styles
    