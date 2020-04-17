import React, {useRef, useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import DraggableItem from '../Draggable'
import Area from '../AreaDrop'
import ButtonUi from '../ButtonControlUI'
import Modal from '../Generales/Modal'
import ButtonCheck from '../ButtonCheck'
import {ICol, IRow} from '../Grid'
import ButtonRadio from '../ButtonRadio'
// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, ProgressbarContainer, UiButtonsContainer } from '../Actividad2/Actividad2_styles'
// import interaction from './Actividad_interactions'
import Tooltip from '../Tooltip'

import Data from './Actividad2_data'
import Ilex from '../../App/variables'
import InputWords from '../InputWords'
import img from '../Actividad1/Actividad_img'

const Actividad2_base = ({staticContext, ...props}) => {

    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)

    const [visible, setvisible] = useState(false)
    const [tooltipTitle, settooltipTitle] = useState()
    const [tooltipText, settooltipText] =  useState()

    const [okInput0, setInput0] = useState(false)
    const [okInput1, setInput1] = useState(false)
    const [okInput2, setInput2] = useState(false)
    const [okInput3, setInput3] = useState(false)
    const [okInput4, setInput4] = useState(false)
    const [okInput5, setInput5] = useState(false)
    const [okInput6, setInput6] = useState(false)
    const [okInput7, setInput7] = useState(false)
    const [okInput8, setInput8] = useState(false)
    const [okInput9, setInput9] = useState(false)

    const [errInput0, setInputErr0] = useState(false)
    const [errInput1, setInputErr1] = useState(false)
    const [errInput2, setInputErr2] = useState(false)
    const [errInput3, setInputErr3] = useState(false)
    const [errInput4, setInputErr4] = useState(false)
    const [errInput5, setInputErr5] = useState(false)
    const [errInput6, setInputErr6] = useState(false)
    const [errInput7, setInputErr7] = useState(false)
    const [errInput8, setInputErr8] = useState(false)
    const [errInput9, setInputErr9] = useState(false)

    const checkActivity = () => {
        var count = 0

        Data.forEach((data, i) => {
            if(data.right === 1){
                count ++
            }else{
                setOk(false)
                setErr(true)
                setModal(true)
            }
            if(count === Data.length){
                setErr(false)
                setOk(true)
                setModal(true)
            }
        })
    }  

    const closetooltip = () => {
        setvisible(!visible)
    }
    const setChecked = (id, value) => {
        const data = Data[id]

        if(data.answer.toLowerCase() === value.toLowerCase()){
            eval('setInput' + id)(true)
            eval('setInputErr' + id)(false)
            data.right = 1
        }else{
            eval('setInputErr' + id)(true)
            eval('setInput' + id)(false)
            data.right = 0
        }
    }

    const list1 = Data.map((data, i) => {
        return (
            <IRow justify={'center'} className="inline_list" py={0.2} key={i} valign="center" >
                    <ICol w={50.5}> 
                        <p> <strong> {i + 1}. </strong> {data.text} </p>
                    </ICol>
                    <IRow w={10} gutters={0.2}>
                        <InputWords ok={eval('okInput' + i)} err={eval('errInput' + i)} idArr={i} changeCheck={setChecked}/>
                    </IRow>
            </IRow>
            )
    })
    const list2 = img.map((data, i) => {
        return (
            <IRow justify={'center'} className="inline_list" py={0.2} key={i} valign="center" >
                    <div className="drag" onClick={() => {settooltipTitle(data.name)
                                                        settooltipText(data.tooltip) 
                                                        setvisible(!visible)}}
                                                        > 
                                                        {data.name} 

                    </div>
            </IRow>
            )
    })
 
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={36} w={72}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Read the statement and decide what festival it is refering to' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.reload()} } />
            </UiButtonsContainer>
            
          
            <IRow pt={4} w={80} justify="center" align="center">
                <MainTitle color={Ilex.violeta2} size={1.3}>
                    READ THE STATEMENT AND DECIDE WHAT FESTIVAL IT IS REFERRING TO BY CHOOSING A (OKTOBERFEST) B (GLASTONBURY) C (THE DAY OF THE DEAD)
                </MainTitle>
            </IRow>
            <IRow pt={4} w={95} align="center" justify="center" >
                <ICol w={70} >
                    {list1}
                </ICol>
                <ICol w={30} pt={3} >
                    {list2}
                </ICol>
            </IRow>
            <IRow pt={4.5} >
                <ICol  onClick={checkActivity} ><ButtonCheck /></ICol>
            </IRow>

            <Tooltip visible={visible} closebtn={closetooltip} w={30} pos={"65em, 15em"}>
                <h3>{tooltipTitle}</h3>
                <p>{tooltipText}</p>
            </Tooltip>
            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'#/actividad2'} finished={ok} />
        </Container>
    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
