import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
position: absolute;
z-index:5000;
top: 0;
left: 0;
right:0;
font-size:${props => props.fz || 0.7 }em;
text-align:center;
color:${Ilex.textos};
background-color: #fff;
padding:2em 1em 2.8em 1em;
border-radius:1.5em;
box-shadow:0 0 1em 0 rgba(0,0,0,0.2);
display:${props => props.visible ? 'block' : 'none'};
transform: translate(${ props => props.pos || '0'});
width:${props => props.w + 'em' || '100%' };
.btn-close{
    position: absolute;
    width:1.5em;
    height:1.5em;
    bottom:0.8em;
    right:1em;
}

`

export default styles
    