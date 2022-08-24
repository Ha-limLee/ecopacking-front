import Carousel from 'nuka-carousel';
import React from 'react';

function PackingAppView({children}: {children: React.ReactNode}) {
  return (
    <Carousel>
      {children}
    </Carousel>
  );
}

export default React.memo(PackingAppView);