import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';

import Wrapper from './components/Wrapper';
import CID from './components/CID';

const App = () => (
  <Wrapper>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://use.typekit.net/dgc7uqu.css" />
    </Helmet>
    <CID />
  </Wrapper>
);

ReactDOM.render(<App />, document.getElementById('App'));