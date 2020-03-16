import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
display: block;
position: relative;

.container1 {
  display: block;
  position: relative;
  cursor: pointer;
  height: auto;
  margin-right: 0em;
  left: 0;
  color: #FFF;
  font-family: ${Ilex.font};
  font-size: 10px;
  margin-bottom: 0.8em;
  text-align: center;
  border-radius: 0.4em;
  font-weight: bold;
  box-shadow: 0 0.4em 0 0 rgba(0, 0, 0, 0.2);
}
.container1 input {
  opacity: 0;
  cursor: pointer;
  position: absolute;
}
.checkmark {
  top: 0;
  left: 0;
  line-height: 1;
  text-align: center;
  display: inline-block;
  border-radius: 0.5em;
  width: auto;
  background-color: white;
  padding: 0.8em 1.5em;
  color: ${Ilex.violeta2};
}



/* On mouse-over, add a grey background color */
.checkmark:hover  {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container1 input:checked ~ .checkmark {
  background-color: ${Ilex.color_amarilloClaro};
  color:${Ilex.morado};
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container1{
  .true,.false,.n-m{
    color:#fff;
    font-weight:bolder;
    font-family: sans-serif;
    font-size:12px;
  }

  .true{
    background-color: ${Ilex.verde};
    &:hover{
      background: #00BC99;
    }
  }
  .false{
    background-color: ${Ilex.color_rojo};
    &:hover{
      background: #AC3350;
    }
  }
  .n-m{
    background-color: ${Ilex.violeta2};
    &:hover{
      background: #6d35ad;
    }
  }
}


`

export default styles
    