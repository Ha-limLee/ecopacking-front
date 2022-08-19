import React from 'react';
import logo from './logo.svg';
import AppView from './App.view';
import { PackingApp } from 'components/PackingApp';

export default function App() {
  return (
    <PackingApp>
      <AppView></AppView>
      <AppView></AppView>
      <AppView></AppView>
    </PackingApp>
  );
}
