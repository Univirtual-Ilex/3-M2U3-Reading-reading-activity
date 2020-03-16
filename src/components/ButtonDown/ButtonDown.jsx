
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonDown_styles'
import {Link} from 'react-router-dom'

// Componente base
const ButtonDown_base = ({link, text, ...props}) => {
    return (
        <div {...props}>
            <button className='btn-clean'>
                {link ? <Link to={link}> { text} </Link> : text}
            </button>
        </div>
    )
}



const ButtonDown = styled(ButtonDown_base)`${ styles }`
export default ButtonDown
