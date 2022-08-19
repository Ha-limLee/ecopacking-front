import Carousel from 'nuka-carousel';
import React from 'react';

export default function PackingAppView({children}: {children: React.ReactNode}) {
  return (
    <Carousel>
      {children}
    </Carousel>
  );
}
