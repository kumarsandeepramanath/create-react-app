import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React',
    content: 'React is a front end JS Frameword',
  },
  {
    title: 'Why use React',
    content: 'React is a famous JS library',
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components',
  },
];
const App = () => {
  return (
    <div>
      <h1> App </h1>
      <Accordion items={items} />
    </div>
  );
};
export default App;
