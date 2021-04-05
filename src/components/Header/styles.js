import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: #009688;
  padding: 16px;
  a {
    color: #d3d3d3;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      color: #2b414d;
    }
  }
  @media all and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 24px;
  }
`;

export const BoxNav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 16px;
  @media all and (min-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 0;
  }
`;

export const BoxLink = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Box = styled.li`
  font-size: 20px;
  margin: 0 8px;
  list-style: none;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #2b414d;
    transition: 0.2s ease all;
  }
`;

export const Logo = styled.div`
  text-align: center;
  margin-right: 0;
  font-size: 30px;
  margin-bottom: 16px;
  a {
    &:hover,
    &:visited {
      color: #d3d3d3;
    }
  }
  @media all and (min-width: 800px) {
    text-align: left;
    margin-right: 24px;
    margin-bottom: 0;
  }
`;

export const BoxAboutMe = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  @media all and (min-width: 800px) {
    display: flex;
    align-items: center;
  }
`;

export const Image = styled.img`
  margin-left: 16px;
  height: 32px;
  width: 32px;
`;
