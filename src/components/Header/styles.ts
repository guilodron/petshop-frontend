import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  padding: 5px 20px;
  background-color: #FF6B00;
  color: white;
  display: flex;
  justify-content:center;
  align-items: center;
  overflow: hidden;

  .cartMenu {
    font-size: 50px;

    &:hover{
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;

export const Menu = styled.div`
  margin: 0 ;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    list-style: none;
    margin-left: 10%;
    
    li {
    margin: 0;
    width: 45%
      
    }
    @media (max-width: 900px){
        margin: 0 5px;
        font-size: 25px;

      }
  }

  a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Icon = styled.img`
    width: 80px;
    padding: 0;

    &:hover {
      opacity: 0.9;
    }
  `;

export const User = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
    
  a {
    display: flex;
    color: white;
    text-decoration: none;
    padding: 5px;

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 900px){
    flex-direction: column;
    a{padding: 2px;}
  }
`;