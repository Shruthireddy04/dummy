import styled from 'styled-components'

export const LoginPage = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? 'grey' : 'white')};
`
export const FormContainer = styled.from`
  background-color: ${props => (props.isDark ? 'black' : 'white')};
`
