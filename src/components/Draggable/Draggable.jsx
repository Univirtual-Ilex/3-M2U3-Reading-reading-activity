//Import
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import styles from './Draggable_styles'
import { gsap, TweenMax } from 'gsap'
//import ThrowPropsPlugin from "gsap/ThrowPropsPlugin"
import { Draggable} from 'gsap/Draggable'
import Ilex from '../../App/variables.js'

// Componente base
// Es un draggable con drop target
// PROPS
/**
 * areaDrag: #id del elemento que se va a usar como contenedor importante usar el #
 * audio: String url de la locación del audio
 * name: Contenido del texto del elemento arrastrable. No usa propchildren
 * target: #id del elemento al que va a apuntar
 * elementId: es un identificador que funciona para definir la identidad de cada instancia
 * // Base
 * ref: Recibe la referencia o el conjunto de referencias html del elemento al que apuntará como droppable
 */

const Draggable_base = React.forwardRef(({ areaDrag, name, target, elementId, status,setStatus,idArr, draggable, ...props }, ref ) => {
		const [background, setBackground] = useState('transparent')
    const itemDraggable = useRef()
    
    useEffect ( () => {

        gsap.registerPlugin(Draggable)
        Draggable.create( itemDraggable.current , { 
            type: 'x,y',
            edgeResistance:0.65,
            bounds:areaDrag,
            throwProps:true,
            zIndex:500,
            inertia:true,
            onDragEnd: function (e) {
                var count = 0
                target.map((item, i) => {
                    const div = document.querySelector('#' + item)
                    if(div){
                        if(!this.hitTest(div, '70%')){
                            count ++
                        }else{
                            div.removeAttribute('id')
                            div.dataset.selected = draggable
                            setStatus(elementId, 1, item)
                        }
                    }else{
                        var hidden_div = document.querySelector('[data-target=' + item + ']')
                        console.log(item, hidden_div)
                        if(draggable === hidden_div.dataset.selected){
                            hidden_div.setAttribute('id', hidden_div.dataset.target)
                        }
                        count ++
                    }
                    if(count == target.length){
                        TweenMax.to(this.target, 0.2, {x:0, y:0})
                        return false
                    }
                })
            }
        })
    } , [areaDrag, target, ref, elementId, status,setStatus,idArr])


    return (
        <div {...props}  ref={itemDraggable}  >

        </div>
        
    )
})

const DraggableItem = styled(Draggable_base)`${ styles }`

export default DraggableItem
