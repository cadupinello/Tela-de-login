import styled from 'styled-components';

export const Navbar = styled.ul`
  display: flex;
  box-shadow: rgba(0, 0, 0, .15) 0px -2px 10px 0px;
  justify-content: center;
  padding: .5em 2em;
  align-items: center;
  gap: 2rem;

  a { 
    text-decoration: none;
  }

  li {
    color: #262626;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid tomato;
    }
  }
`;

