import {css} from 'styled-components'
import Ilex from '../../App/variables'
import animations from './Home_animations'
// La utilidad css me permite usar css desde un elemento externo
const estilos_home = css`
    h1 {
        color: ${Ilex.morado};
        font-size: 3.2em;
        font-weight: bold;
        line-height:0.95;
        margin-top: 0.5em;
    }

    .bloque-izquierdo,.bloque-derecho{
        flex-grow:1;
        width:50%;
        position: relative
    }

    .bloque-izquierdo {
        padding:6.5em 3em 3em 5em;
        box-sizing:border-box;
        .bloque-izquierdo-container{
        width:27.5em;
        margin: auto;
         }
         p{
             margin: 2em 0 1em 0;
             color: ${Ilex.textos};

         }
         .negrilla{
        font-weight: bold;
        }
    }

    .bloque-derecho>figure{
        position:absolute;
        top: -3em;
        left: 5em;
        img{
            display:block;
            width:22.5em;
            height: auto;
            transform: scale(1.3);
            margin-top: 15em;
        }

    }

    .entrada-top-Y{
        animation-name: ${animations.entrada_top_Y}
    }
    .saldida-top-X{
        animation-name: ${animations.entrada_top_Y}
    }
    .start{
        margin-top: 0.5em;
    }


`

export default estilos_home