import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
display: block;
position: relative;

.container {
  position: relative;
  cursor: pointer;
  height: auto;
  margin-right: 1em;
  left: 0;
  
}
.container input {
  cursor: pointer;
  position: absolute;
}
.checkmark {
  top: 0;
  left: 0;
  line-height: 1;
  text-align: center;
  display: inline-block;
  width: auto;
  padding: 0.5em;
  color: ${Ilex.violeta2};
}



/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: ${Ilex.verde};
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
`

export default styles
    