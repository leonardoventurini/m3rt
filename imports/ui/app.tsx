import React from 'react';
import { Hello } from './hello';
import { Info } from './info';

export function App() {
  return <div className="p-4 max-w-[900px] mx-auto">
    <h1 className="text-3xl font-bold text-orange-500">
      Meteor 3.0, React and Tailwind
    </h1>
    <Hello/>
    <Info/>
  </div>;
}
