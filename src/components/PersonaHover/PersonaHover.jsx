//Import
import React from 'react'
import styled from 'styled-components'
import styles from './PersonaHover_styles'
// components
import Tooltip from '../Tooltip'
import { useState } from 'react'


// Componente base
const PersonaHover_base = ({profession, tooltip, ...props}) => {
    const [visible, mostrarTooltip] = useState(false)

    return (
        <div {...props}>
                <div className={'person ' + profession } onClick={() => mostrarTooltip(!visible)}>
                </div>
                <div className='recorder'>
                    <button className='btn-clean'>
                        <img src='./src/rec_btn_2.svg' alt='record your voice' />
                    </button>
                    <button className='btn-clean'>
                        <img src='./src/play_btn_2.svg' alt='listen to your voice' />
                    </button>
                </div>
                <div>
                    <Tooltip visible={visible} onClick={() => mostrarTooltip(!visible)} > {tooltip} </Tooltip>
                </div>
        </div>
    )
}
const PersonaHover = styled(PersonaHover_base)`${ styles }`
export default PersonaHover
