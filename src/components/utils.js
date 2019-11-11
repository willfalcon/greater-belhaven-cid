import { useState, useEffect } from 'react';

import theme from './theme';

function useViewport() {
  const [viewport, updateViewport] = useState({ width: 0, height: 0 });
  const [ready, makeReady] = useState(false);
  const [breakpoint, setBreakpoint] = useState(null);

  const doUpdateViewport = () => {
    if (ready) makeReady(false);
    const viewport = getViewport();
    updateViewport(viewport);
    const breakpoint = getCurrentBreakpoint(viewport.width);
    setBreakpoint(breakpoint);
    makeReady(true);
  };

  useEffect(() => {
    doUpdateViewport();
    window.addEventListener('resize', doUpdateViewport);
    return () => window.removeEventListener('resize', doUpdateViewport);
  }, []);

  return { viewport, ready, breakpoint };
}

const getViewport = () => {
  var e = window,
    a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return {
    width: e[a + 'Width'],
    height: e[a + 'Height']
  };
};

const getCurrentBreakpoint = (width = getViewport().width) => {
  // if (width >= theme.sizes.large) {
  //   return 'large';
  // }
  if (width >= theme.sizes.break) {
    return 'break';
  }
  return 'small';
};

export { getViewport, useViewport, getCurrentBreakpoint };