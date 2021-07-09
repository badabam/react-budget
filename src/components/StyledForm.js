import styled from 'react-emotion'

const StyledForm = styled('form')`
  grid-row: 3;
  padding: 10px 10px 20px;
  display: grid;
  grid-gap: 10px;
  position: relative;
  &:before {
    content: '';
    display: ${window.cordova ? 'none' : 'block'};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    height: 40px;
    background: linear-gradient(transparent, hotpink);
  }
`

export default StyledForm
