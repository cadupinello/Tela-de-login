import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-color: #eee;
`;

export const FormSection = styled.div`
  width: 30%;
  height: 80vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 24px;
    color: #023530;
    margin-bottom: 80px;
    font-weight: 900;
    font-family: 'Nunito';
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
  }
`;


export const VisualSection = styled.div`
  width: 70%;
  height: 80vh;
  background-color: #023530;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const PlanetImage = styled.img`
  width: 450px;
  height: 450px;
  object-fit: cover;
`;