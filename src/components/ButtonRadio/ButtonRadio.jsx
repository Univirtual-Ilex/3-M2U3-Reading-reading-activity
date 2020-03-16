
//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './ButtonRadio_styles'

// Componente base
const Checkbox = props => (
  <input type="radio" name {...props} />
)
const ButtonRadio_base = ({buttonId,setCheckedState, text, arrId, nameb,...props}) => {
    const [state, setState] = useState({ checked: false })

	const handleCheckboxChange = event => (
    		setState({ checked: event.target.checked }),
    		setCheckedState(arrId, buttonId)
		)

    return (
        <div {...props}>
        	<label className="container1">
	            <Checkbox 
	            	defaultChecked={state.checked}
	            	onClick={handleCheckboxChange}
	            	name={nameb}
	            >
            	</Checkbox>
            	<span className={`checkmark ${text === 'TRUE' ? 'true' : text === 'FALSE' ? 'false' : 'n-m' }`}>{text} </span>
            </label>
        </div>
    )
}
const ButtonRadio = styled(ButtonRadio_base)`${ styles }`
export default ButtonRadio
