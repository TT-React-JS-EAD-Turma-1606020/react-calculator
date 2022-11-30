import { StyledButton } from './styles'

export const Button = ({ children, mlAuto, isOperation, ...rest }) => {
  return (
    <StyledButton mlAuto={mlAuto} isOperation={isOperation} {...rest}>
      {children}
    </StyledButton>
  )
}