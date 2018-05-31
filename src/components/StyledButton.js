import styled from 'react-emotion'

const StyledButton = styled('button')`
  font-size: 1em;
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  transition: all 0.5s ease;
  background-image: linear-gradient(#777, #555, #444, #333);
  &[disabled] {
    opacity: 0.3;
  }
`
export default StyledButton
