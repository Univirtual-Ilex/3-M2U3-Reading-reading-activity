
//Import
import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import styles,{buttonAudio2} from './ButtonAudio_styles'
//

// Componente base
const ButtonAudio_base = ({src, srcImg, w, h, p, py, px, pl, pt, pr, pb, ml, mt, mr, mb, my, mx, ...props}) => {
    
    return (
        <div {...props}>
            
            <button className={'btn-clean2 '} >
            <img src={srcImg}/>
                { props.children ? props.children : "" }
            </button>
        </div>
    )
}
const ButtonAudio = styled(ButtonAudio_base)`${ styles }`
export const ButtonAudio2 = styled(ButtonAudio)` ${ buttonAudio2 }`
export default ButtonAudio
