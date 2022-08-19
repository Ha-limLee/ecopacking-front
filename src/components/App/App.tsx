import React from 'react';
import logo from './logo.svg';
import AppView from './App.view';
import { PackingApp } from 'components/PackingApp';
import Carousel from 'nuka-carousel';

export default function App() {
  return (
    <div id='App'>
    <Carousel>
      <AppView></AppView>
      <AppView></AppView>
      <AppView></AppView>
    </Carousel>
    </div>
  );
}
