import React, {useState, useRef} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import ButtonCheck from '../ButtonCheck'
import ButtonAudio from '../ButtonAudio'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'

// Data
import Data from './Actividad_data'
import img from './Actividad_img'

import DraggableItem from '../Draggable'

import Modal from '../Generales/Modal'
import Tooltip from '../Tooltip'
const Actividad_base =  ({staticContext,...props}) => {

    const [visible, setvisible] = useState(false)
    const [tooltipTitle, settooltipTitle] = useState()
    const [tooltipText, settooltipText] =  useState()
    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)
    
    const closetooltip = () => {
        setvisible(!visible)
    }

    const setStatusCheck = (id, status, target) => {
        var data = Data[id]
        data.status = status

        if(target){
            if(data.answer === target){
                data.right = 1
            }else{
                data.right = 0
            }
        }else{
            data.right = 0
        }
    }


    const checkActivity = () => {
        var count = 0
        Data.map((data, i) => {
            if(data.right === 1){
                count ++
            }else{
                setErr(true)
                setModal(true)
            }

            if(count === Data.length){
                setOk(true)
                setModal(true)
            }
        })
    }


    return (
        <Container bgImage='./src/bg_actividad1.png' id='area' {...props} h={35} w={75} >
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Click on each image to read the description ' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again'  onClick={ () => {window.location.reload()} }/>
            </UiButtonsContainer>
            <IRow pt={4}>
                <ICol >
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    READ DESCRIPTIONS ABOUT FESTIVALS AROUND THE WORLD AND THEN ANSWER
                    </MainTitle>  
                </ICol>
            </IRow>
            <IRow>
                <ICol >
                    <IRow justify='center' align='center' w={100} gutters={0.5} className="box">
                        { img.map((item, index) => {
                            return(
                            <div key={index} className="img-cont">
                                <div  className="img"  style={{backgroundImage: `url(${item.img})`}}>
                                    <div className="read_button" onClick={() => {settooltipTitle(item.name)
                                                                                settooltipText(item.tooltip) 
                                                                                setvisible(!visible)}}>
                                        
                                    </div>
                                </div> 
                                <div className="drag"> {item.name} </div>
                            </div>             
                            ) 
                        }) }
                    </IRow>
                </ICol>
                <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'#/actividad1'} nxtUrl={'#/actividad2'} />
                <IRow pt={5.5} >
                    <ICol pt={9.5}>
                        <a href="#/actividad2"> <ButtonCheck text={"NEXT"} /></a>
                    </ICol>
                </IRow>
            </IRow>
            
            <Tooltip visible={visible} closebtn={closetooltip} w={30} pos={"45em, 15em"}>
                <h3>{tooltipTitle}</h3>
                <p>{tooltipText}</p>
            </Tooltip>
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad