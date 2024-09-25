import styled from 'styled-components';
import FormControlStyle from '@mui/material/FormControl'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 48px;
  color: #a6a6a6;
  font-weight: 900;
  margin-bottom: 30px;
  font-family: 'Nunito';
  text-align: center;
`

export const FormControl = styled(FormControlStyle)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  label {
    font-size: 16px;
    color: #676767;
  }
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 2px #0003;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

export const LabelSignin = styled.label `
  font-size: 16px;
  color: #676767;
  margin: 15px 0;
`;

export const Strong = styled.strong `
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
   }
`;

export const LabelError = styled.label `
  font-size: 14px;
  color: tomato;
`;

