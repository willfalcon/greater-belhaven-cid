import React, { useState, useEffect } from 'react';

import { useViewport } from './utils';

const SiteContext = React.createContext();

const SiteContextProvider = ({ children }) => {

  const [options, setOptions] = useState();

  const { viewport, ready: windowReady, breakpoint } = useViewport();

  const [dataReady, setDataReady] = useState(false);

  const [leftWidth, setLeftWidth] = useState(0);

  const [heightReady, setHeightReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const optionsRes = await fetch('http://localhost/greaterbelhaven.dev/wp-json/cid/options');
      const options = await optionsRes.json();
      setOptions(options);
      setDataReady(true);
    }
    fetchData();
  }, []);

  return (
    <SiteContext.Provider
      value={{
        ...options,
        viewport,
        windowReady,
        breakpoint,
        ready: dataReady && windowReady && heightReady,
        setHeightReady, heightReady,
        leftWidth, setLeftWidth
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export { SiteContextProvider };

export default SiteContext;