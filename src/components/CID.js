import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Info from './Info';
import Instructions from './Instructions';
import FAQ from './FAQ';
import Footer from './Footer';
import Loader from './Loader';

const CID = () => {

  return (
    <Container>
      <Header />
      <Loader />
      <Info />
      <Instructions />
      <FAQ />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

export default CID;