import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: #fff;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;

  ul {
    display: flex;
    flex-direction: column;
  }

  a {
    list-style: none;
    text-decoration: none;
    margin: 1rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 5px;
    color: #262626;
    border: 2px solid #262626;
    font-weight: 600;
  }

  a:hover {
    background-color: #262626;
    color: #fff;
  }
`;

export const Label = styled.label `
  font-size: 18px;
  color: #676767;
  font-weight: 600;
`;
