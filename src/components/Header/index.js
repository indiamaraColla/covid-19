import React from 'react';
import { Link } from 'react-router-dom';
import AssetsGitHub from '../../assets/github.png';

import { Container, BoxNav, BoxLink, Logo, Box, BoxAboutMe, Image } from './styles';

const Header = () => (
  <Container>
    <BoxNav>
      <Logo>
        <Link to="/">COVID-19 BRAZIL </Link>
      </Logo>
      <BoxLink>
        <Box>
          <Link to="/">Home</Link>
        </Box>
        <Box>
          <Link to="/world">No Mundo</Link>
        </Box>
        <Box>
          <Link to="/information">Informações</Link>
        </Box>
      </BoxLink>
    </BoxNav>

    <BoxAboutMe>
      <Box>
        <a href="https://www.linkedin.com/in/indiamara-tibes-siqueira/" target="blank">
          Sobre Mim
        </a>
      </Box>
      <a href="https://github.com/indiamarasiqueira/covid-19" target="blank">
        <Image src={AssetsGitHub} alt="git" />
      </a>
    </BoxAboutMe>
  </Container>
);

export default Header;
