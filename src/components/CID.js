import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Info from './Info';
import Instructions from './Instructions';
import FAQ from './FAQ';
import Footer from './Footer';

const CID = () => {
  return (
    <Container>
      <Header />
      <Info />
      <Instructions />
      <FAQ />
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

export default CID;