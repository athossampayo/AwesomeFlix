import styled from 'styled-components';



export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  border-image: 
    linear-gradient(
      to top, 
      var(--primary), 
      rgba(0, 0, 0, 0)
    ) 99 100%;
  box-shadow: 0 0 20px -2px var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
