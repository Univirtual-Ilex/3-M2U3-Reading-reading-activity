import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import {ButtonLink} from '../ButtonX'
import estilos_home from './Home_styles'
import {ICol} from '../Grid'



const Home_base = function ({ staticContext, ...props}) { // se le pasan las props para recibir los styled components

    return (
        <Container {...props}  row bgImage="src/bg.png">

                    <div className='bloque-izquierdo'>
                        <div className='bloque-izquierdo-container'>
                            <h1> Reading activity </h1>
                            <p>
                            Answer the following questions about the three descriptions by choosing the right
                                <span className='negrilla'> <br/><br/> Time to practice your reading skill!</span>
                           </p>
                            <ButtonLink className="start" to='/actividad1'>Start</ButtonLink>
                        </div>
                    </div>
                    <ICol className='bloque-derecho'>
                        <figure>
                            <img src='./src/cover.png' alt='Logo' />    
                        </figure>

                    </ICol>

        </Container>
    )
}

const Home = styled(Home_base)`
    ${ estilos_home }
`

export default Home