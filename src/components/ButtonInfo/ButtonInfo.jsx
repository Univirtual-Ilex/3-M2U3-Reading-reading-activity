
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonInfo_styles'

// Componente base
const ButtonInfo_base = ({ children, imgUrl, ...props}) => {
    return (
        <div {...props}>
            <button className="btn-clean">
                <span>
                    <img src={imgUrl || 'src/svg/camara.svg'} alt="Ver texto de apyo"/>
                </span>
                <span>
                { children || 'Open'}
                </span>                
            </button>

        </div>
    )
}
const ButtonInfo = styled(ButtonInfo_base)`${ styles }`
export default ButtonInfo
