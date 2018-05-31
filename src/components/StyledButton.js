import styled from 'react-emotion'

const StyledButton = styled('button')`
  font-size: 1em;
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: none;
  transition: all 0.5s ease;
  background: #333;
  &[disabled] {
    transition: all 0.3s 0.1s ease;
    background: #999;
    opacity: 0.9;
  }
  &:active {
    transition: none;
    background: cornflowerblue;
  }
`
export default StyledButton
