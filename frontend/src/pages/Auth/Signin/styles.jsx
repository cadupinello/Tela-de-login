import FormControlStyle from '@mui/material/FormControl'
import styled from 'styled-components';


export const Title = styled.h3`
  font-size: 48px;
  color: #a6a6a6;
  font-weight: 900;
  margin-bottom: 30px;
  font-family: 'Nunito';
  text-align: center;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormControl = styled(FormControlStyle)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 16px;
    color: #676767;
    margin-top: 10px;
  }
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

